import React from 'react';
import {cartQuantity} from '../Utilities/CartFunctions' 
import uuid from 'react-uuid'

const Checkout = (props) => {

    function totalCostCalc(){
        let totalCost =0;
        for(let i=0;i<props.currentCart.cart.length;i++){
            totalCost += props.currentCart.cart[i].quantity * props.currentCart.cart[i].product.price;
        }
        return totalCost;
    }

    const cartPopup = () => {
        let publishArray = props.currentCart.cart.map((item,index) => {
            return(
        <div>
            <div className ={'popupcart-listitem'} key={uuid()}>
                <div  key={uuid()}>
                    {item.product.name}
                </div>
                <div key={uuid()}>
                    <button className='popupcart-buttons' onClick={() => props.addToCart(item.product)}>+</button>
                    <div>
                        {item.quantity}
                     </div>
                    <button className='popupcart-buttons' onClick={() => props.delFromCart(item.product.itemId)}>-</button>
                </div>
                <div key={uuid()}>
                    {item.product.price}
                </div>
                <div key={uuid()}>
                    {item.product.price * item.quantity}
                </div>
            </div>
                <div>
                {
                    index==props.currentCart.cart.length -1 
                    ?
                    <div>
                        <div className='cart-total'>
                            {totalCostCalc()}
                        </div>
                        <div className='checkout-paybutton'>
                            <button>Click Here to Pay</button>
                        </div>
                    </div>
                    :null
                }
                </div>

        </div>
            )
        }
     )

     return publishArray;
}
    console.log(props);
    return(
        <div>
            <div>
                <h1>Checkout Page</h1>
            </div>
            <div>
                {
                    <div>
                        {cartPopup()}
                    </div>
                
                    
                }
            </div>
        </div>
    )
}

export default Checkout