import React, {useState} from 'react'
import {Outlet, Link} from 'react-router-dom';
import smallDatabase from '../Utilities/ShopDatabase';
import {cartQuantity} from '../Utilities/CartFunctions';

const Shop = (props) => {

    console.log(props);

    const allData = smallDatabase();
    const [activeCategory, setActiveCategory] = useState('one');

        function categoryDisplay(){
            let categoryContainer = [];
            let categoryJSX = [];
            for(let i=0;i<allData.length;i++){
                if(categoryContainer.indexOf(allData[i].category) === -1){
                    categoryContainer.push(allData[i].category);
                    categoryJSX.push(
                        <div className={`${allData[i].category == activeCategory ? 'active-category':''} category-container`} onClick={(event) => setActiveCategory(`${allData[i].category}`) }>
                            {allData[i].category}
                        </div>
                    )
                }
        }
        return categoryJSX
    }

    const cartQuantity = (currentCart, product,) => {
        console.log(currentCart.cart);
        console.log(product);
        for(let i=0;i<currentCart.cart.length;i++){
            if(product.itemId == currentCart.cart[i].product.itemId){
                if(currentCart.cart[i].quantity > 0){
                    return(
                        <div>
                            
                            <button onClick={() => props.delFromCart(product.itemId)}>-</button>
                            <span>{currentCart.cart[i].quantity}</span>
                            <button onClick={() => props.addToCart(product)}>+</button>
                        </div>
                    )
                }
            }
        }
         return(
            <div onClick={() => props.addToCart(product)}>
                 ADD TO CART
            </div>
       )
}





    return(
        <div>
            <div className='testbox123'>
                <h2>Categories</h2>
            </div>
            {
                categoryDisplay()
            }
        <div>
            {
             allData.map((element,index) => {
                 if(activeCategory == element.category){
                 return(
                     <div key={element.itemId}>
                         <div>
                             <Link to={`/shop/${element.itemId}`}>{element.name}</Link>
                        </div>
                        <div>
                            {element.price}
                        </div>
                        <div>
                            {
                                cartQuantity(props.currentCart,element)     
                            }
                        </div>
                     </div>
                 )
                }
             })   
            }
        </div>
    </div>
    )
}

export default Shop;