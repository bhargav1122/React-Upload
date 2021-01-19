import React, { Component, } from 'react'
import './App.css';
import axios from 'axios'
import Products from './Components/Products.js';
import TopFilter from './Components/TopFilter';
import LeftFilter from './Components/LeftFilter';
import CartComponent from './Components/CartComponent';
import Data from "./Components/ProductsData.json"


class App extends Component {


  constructor() {
    super();
    this.state = {
      products: Data.Products,
      dataSample:Data.Products,
      cartItems: [],
      size: "",
      sort: "",
      cartChecked: false,
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/online-shopping/api/products")
      .then(res => {
        this.setState({
          products: res.data,
          dataSample: res.data,
        })
      }
      )
  }


  onClickCart = () => {
    this.setState({ cartChecked: !this.state.cartChecked })
    console.log(this.state.cartChecked)
  }

  addToCart = (product) => {
    console.log("inside add to cart");
    console.log(product)
    const cartItems = this.state.cartItems.slice();
    console.log(cartItems);
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      console.log("Adding to cart items")
      cartItems.push({ ...product, count: 1 });
      console.log(cartItems)
    }
    console.log("end of add to cart")
    this.setState({ cartItems });
    console.log(this.state.cartItems)
  };

  sortProducts = (event) => {
    console.log(event.target.value);
    this.setState((state) => ({
      sort: event.target.value,
      products: this.state.products.slice().sort((a, b) => (
        this.state.sort === "lowest" ?
          ((a.price < b.price) ? 1 : -1) :
          this.state.sort === "highest" ?
            ((a.price > b.price) ? 1 : -1) :
            ((a.id < b.id) ? 1 : -1)
      ))
    }));
  }

  filterProducts = (event) => {
    let size = event.target.value;
    if(size.toString() === ""){
      this.setState({
        size: event.target.value,
        products: this.state.dataSample,
      })
    }else{
      this.setState({
        size: event.target.value,
        products: this.state.dataSample.filter(product => product.size === size),
      })
    }
    
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(item => item.id !== product.id)
    });

  }


  render() {
    return (
      <div className="App">
        <div className='grid-container'>
          <header>
            <h2>Online Shopping</h2>
            <div className="cart-icon" onClick={this.onClickCart}>
              <i class={this.state.cartChecked ? "fas fa-times" : "fas fa-shopping-cart"}></i>
              {this.state.cartChecked === false && (
                <div className="header-cart-count"><div>{this.state.cartItems.reduce((a,c) => a +c.count,0)}</div></div>
              )}

            </div>
          </header>
          <main>
            <div className="content">

              <div className="left-sidebar">
                <LeftFilter
                  size={this.state.size}
                  filterProducts={this.filterProducts}></LeftFilter>
              </div>
              <div className="main">
                <TopFilter count={this.state.products.length}
                  sort={this.state.sort}
                  sortProducts={this.sortProducts}></TopFilter>
                <Products products={this.state.products} addToCart={this.addToCart}></Products>
              </div>
              <div className="cart-wrapper">
                <CartComponent
                  cartChecked={this.state.cartChecked}
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                ></CartComponent>
              </div>
            </div>
          </main>
          <footer>
            Online Shopping
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
