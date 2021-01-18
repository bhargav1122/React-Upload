import React, { Component } from 'react'

export class CartComponent extends Component {


    render() {

        return (

            <div className={this.props.cartChecked ? "cart active" : "cart"}>
                <div className="cart-header">
                    <i class="fas fa-shopping-cart cart-icon"></i>
                    <p className="cart-title">Bag</p>
                </div>
                {this.props.cartItems.length === 0 ?
                    <div style={{textAlign:'center',}}>Cart is Empty</div> :
                    <div style={{textAlign:'center',}}>You have {this.props.cartItems.length} in the cart</div>
                }
                <div>
                    <ul className="cart-items">
                        {this.props.cartItems.map((item) => {
                            return(
                            <li key={item.id}>
                                <div className='cart-item'>
                                <div >
                                    <img src={item.imgURL} alt={item.name} ></img>
                                </div>
                                    <div>
                                <div >
                                    {item.name}
                                </div>
                                Q : {item.count} {" "}
                                <div className="right">
                                price : {((item.price)*(item.count)).toFixed(2)} {" "}
                                <button onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                </div>
                                
                                </div>
                                </div>
                            </li>
                            )
                        }
                        )}
                    </ul>
                </div>
                    <div className="total">
                        <div className="subtotal">
                        <div style={{fontSize:"1.2rem",color:"#6c757d",fontWeight:''}}>
                            SUBTOTAL
                        </div>
                        <div>
                            <span style={{fontSize:"1.5rem",color:"#6c757d",fontWeight:''}}>Total:{" "}</span>
                            <span style={{fontSize:"1.5rem",color:"#e09f3e",fontWeight:''}}>{this.props.cartItems.reduce((a,c) => a + c.price * c.count,0).toFixed(2)}</span>
                        </div>
                        </div>
                        <button className="checkout">CHECKOUT</button>
                    </div>
            </div>
        )
    }
}

export default CartComponent
