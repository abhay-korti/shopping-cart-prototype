import React, {useRef,useState} from 'react'
import {Outlet, Link} from 'react-router-dom'
import uuid  from 'react-uuid';


const Navbar = (props) => {

    const [popupDisplayStatus,setPopUpDisplayStatus] = useState(false);
    const popupRef = useRef();
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
                    <div  key={uuid()}>
                        {item.product.name}
                    </div>
                    <div key={uuid()}>
                        <button className='popupcart-buttons' onClick={() => props.addToCart(item.product)}>+</button>
                        {item.quantity}
                        <button className='popupcart-buttons' onClick={() => props.delFromCart(item.product.itemId)}>-</button>
                    </div>
                    {/* <div key={uuid()}>
                        {item.product.price}
                    </div>
                    <div key={uuid()}>
                        {item.product.price * item.quantity}
                    </div> */}
                </div>
                )
            }
         )
         return publishArray;
    }

return(
    <div>
        <div className='navbar'>
            <div className='logo'>
                Logo
            </div>
            <nav className='navbar-content'>
                <ul className='navbar-elements'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li onClick={(event) => {
                        if(popupDisplayStatus){
                            popupRef.current.style.display = 'none';
                            setPopUpDisplayStatus(false)
                        }
                        else{
                            popupRef.current.style.display = 'flex';
                            setPopUpDisplayStatus(true);
                        }
                    }}>
                    Cart {`(${getQuantity()})`}
                    <div ref={popupRef} className='popup-cart' onClick={(event) => event.stopPropagation()}>
                        {cartPopup()}    
                    </div> 
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                 </ul>
           </nav>
        </div>
 </div> 
 )
}
export default Navbar