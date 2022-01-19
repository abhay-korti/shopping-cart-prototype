import React, {useState} from 'react'
import {Outlet, Link} from 'react-router-dom';
import smallDatabase from '../Utilities/ShopDatabase';
import {cartQuantity} from '../Utilities/CartFunctions';

const Shop = (props) => {

    console.log(props);

    const allData = smallDatabase();
    const [activeCategory, setActiveCategory] = useState('all');

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

    return(
        <div>

            <h1>Categories</h1>
            <div className='shop-totalcontainer'>
                <div className='total-categorycontainer'>
                {
                    categoryDisplay()
                }
                </div>
            <div className='shop-totalitemcontainer'>
                {
                allData.map((element,index) => {
                    if(activeCategory=='all' || activeCategory == element.category){
                    return(
                        <div key={element.itemId} className='shop-itemcontainer'>
                            <div className='shop-imagecontainer'>
                                <img src={element.img_source_one} alt={element.name} className='shop-image'></img>
                            </div>
                            <div>
                                <Link to={`/shop/${element.itemId}`}>{element.name}</Link>
                            </div>
                            <div>
                                {`$${element.price}`}
                            </div>
                            <div className='quantity-holder-display'>
                                {
                                    cartQuantity(props.currentCart,element,props.addToCart,props.delFromCart)
                                }
                            </div>
                        </div>
                    )
                    }
                })   
                }
            </div>
        </div>
    </div>
    )
}

export default Shop;