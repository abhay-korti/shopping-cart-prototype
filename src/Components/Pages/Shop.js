import React from 'react'
import {Outlet, Link} from 'react-router-dom';
import smallDatabase from '../Utilities/ShopDatabase';

const Shop = (props) => {

    const allData = smallDatabase();
    console.log(props);

    function cartQuantity(element) {
        console.log('in func');
        for(let i=0;i<props.currentCart.length;i++){
            if(element.itemId == props.currentCart[i].product.itemId){
                if(props.currentCart[i].quantity > 0){
                    return(
                        <div>
                            <input type="number" value={props.currentCart[i].quantity}/>
                        </div>
                    )
                }
                else{
                    return(
                         <div>
                             No item
                         </div>
                        )
                    }
                }
            }
        }

    return(
        <div>
        <div>
            {
             allData.map((element,index) => {
                 console.log(element);
                 return(
                     <div key={element.itemId}>
                         <div>
                             <Link to={`/shop/${element.itemId}`}>{element.name}</Link>
                        </div>
                        <div>
                            {element.price}
                        </div>
                            {
                                cartQuantity(element)     
                            }
                     </div>
                 )
             })   
            }
        </div>
        </div>
    )
}

export default Shop;