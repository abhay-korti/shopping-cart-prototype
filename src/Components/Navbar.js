import React from 'react'
import {Outlet, Link} from 'react-router-dom'


const Navbar = (props) => {

    const getQuantity = () => {
        let quant=0;
        if(props.cart.length >0){
        for(let i=0;i<props.cart.length;i++){
            quant += props.cart[i].quantity;
        }
    }
        return quant 
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
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart {`(${getQuantity()})`} </Link>
                    </li>
                </ul>
            </nav>
        </div>
            <Outlet/>
            </div>
    )
}
export default Navbar