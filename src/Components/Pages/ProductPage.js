import react from "react";
import {Link, Outlet} from 'react-router-dom'
import {searchDatabase} from "../Utilities/ShopDatabase";
import { cartQuantity } from "../Utilities/CartFunctions";
import { useParams } from "react-router-dom";

const ProductPage =  (props) => {
    let params = useParams();
    let product = searchDatabase(params.productId);
    console.log(product);
    return(
    <div>
        <div>
        {// Image Source}
}
        </div>
        <div>
            <div>
                <h2>
                    {product.name}
                </h2>
            </div>
            <div>
                {product.desc}
            </div>
            <div>
                {product.price}
            </div>
            <div>
                {cartQuantity(props.currentCart,product,props.addToCart,props.delFromCart)}
            </div>
        </div>
    </div>
    )

}


export default ProductPage

