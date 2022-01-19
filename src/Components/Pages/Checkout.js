import React from 'react';
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
        <div className='checkout-totaldiv'>
            <div className ={'checkout-item'} key={uuid()}>
                <div className="checkout-imagecontainer">
                    <img src={item.product.img_source_one} alt={item.product.name} className="checkout-image"></img>
                </div>
                <div  key={uuid()} className='checkout-name'>
                    {item.product.name}
                    <div className='checkout-listitem-splice' onClick={() => {
                            props.remFromCart(item.product.itemId);
                        }}>Remove from Cart
                </div>
                </div>
                <div key={uuid()} className='checkout-quant'>
                    <button className='popupcart-buttons' onClick={() => props.addToCart(item.product)}>+</button>
                    <div>
                        {item.quantity}
                     </div>
                    <button className='popupcart-buttons' onClick={() => props.delFromCart(item.product.itemId)}>-</button>
                </div>
                <div key={uuid()} className='checkout-price'>
                    {item.product.price}
                </div>
                <div key={uuid()} className='checkout-totalprice'>
                    {item.product.price * item.quantity}
                </div>
                </div>
                <>
                {
                    index==props.currentCart.cart.length -1 
                    ?
                    <div className='checkout-end'>
                        <div className='cart-total'>
                            {`Your total is ${totalCostCalc()}`}
                        </div>
                        <div className='checkout-paybutton'>
                            <button>Click Here to Pay</button>
                        </div>
                    </div>
                    :null
                }
                </>


        </div>
            )
        }
     )

     return publishArray;
}
    return(
        <div className='checkout-background'>
            <div>
                <h1>Checkout Page</h1>
            </div>
            <div>
                {
                    <div className='checkout-totalcontainer'>
                        {cartPopup()}
                    </div>
                
                    
                }
            </div>
        </div>
    )
}

export default Checkout