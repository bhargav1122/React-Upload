import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map((product) =>{
                        return(
                            <li key={product.id}>
                            <div className="product">
                                <img src={product.imgURL} alt={product.name}></img>
                                <p>{product.name}</p>
                                <div className="product-details">
                                    <p><i class="fas fa-rupee-sign"></i> {product.price}</p>
                                    <p>{product.size}</p>
                                </div>
                                <button onClick={()=>this.props.addToCart(product)} className="btn-primary">
                                    Add To Cart
                                </button>
                            </div>
                        </li>
                        )
                        
                    })}
                </ul>
            </div>
        )
    }
}
