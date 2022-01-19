import React, {useRef,useState} from 'react'
import {Link} from 'react-router-dom'
import uuid  from 'react-uuid';


const Navbar = (props) => {

    const [popupDisplayStatus,setPopUpDisplayStatus] = useState(false);
    const popupRef = useRef();

    const triangleRef = useRef();

    const getQuantity = () => {
        let quant=0;
        if(props.cart.length >0){
        for(let i=0;i<props.cart.length;i++){
            quant += props.cart[i].quantity;
        }
    }
        return quant 
    } 

    const cartPopup = () => {
            let publishArray = props.cart.map((item,index) => {
                return(
                <div className ={'popupcart-listitem'} key={uuid()}>
                    <div>
                        <div className='popupcart-imagecontainer'>
                            {
                                <img src={item.product.img_source_one} alt={item.product.name} className='popupcart-image'></img>
                            }
                        </div>
                    </div>
                    <div  key={uuid()} className='popupcart-listitem-namecontainer'>
                        <div className="popupcart-listitem-name">{item.product.name}</div>
                        <div className='popupcart-listitem-splice' onClick={() => {
                            props.remFromCart(item.product.itemId);
                        }}>Remove from Cart</div>
                    </div>
                    <div key={uuid()} className='popup-buttoncontainer'>
                        <button className='popupcart-buttons' onClick={() => props.addToCart(item.product)}>+</button>
                        <div>
                            {item.quantity}
                         </div>
                        <button className='popupcart-buttons' onClick={() => props.delFromCart(item.product.itemId)}>-</button>
                    </div>
                </div>
                )
            }
         )
         let popupReturnValue = 
         <div>
             { props.cart.length > 0 ? <div onClick={() => {
                 popupRef.current.style.display = 'none';
                 triangleRef.current.style.display = 'none';
                setPopUpDisplayStatus(false)}} className='checkout-button'><Link to="checkout">Proceed To Checkout</Link></div> : ""}
             <div>
                 {publishArray}
             </div>
         </div>
         return popupReturnValue;
    }

return(
    <div>
        <div className='navbar'>
            <div className='logo'>
                UNIQLO
            </div>
            <nav className='navbar-content'>
                <ul className='navbar-elements'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <div className='test'>
                        <li>
                            <div className='popup-container'>
                                <div onClick={(event) => {
                                    if(popupDisplayStatus){
                                        popupRef.current.style.display = 'none';
                                        triangleRef.current.style.display = 'none';
                                        setPopUpDisplayStatus(false)
                                    }
                                    else{
                                        popupRef.current.style.display = 'flex';
                                        triangleRef.current.style.display = 'flex';
                                        setPopUpDisplayStatus(true);
                                    }}}className='popup-parent'>
                                        Cart
                                </div>
                            </div>
                        </li>
                        <div ref={triangleRef} className='cartpopup-traingle'></div>
                        <div ref={popupRef} className='popup-cart' onClick={(event) => event.stopPropagation()}>
                            {cartPopup()}
                        </div>      
                    </div>
                    <div className='popup-cartquant'>
                                    {getQuantity()}
                                </div>
                 </ul>
           </nav>
        </div>
 </div> 

 )
}
export default Navbar
