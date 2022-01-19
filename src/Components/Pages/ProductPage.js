import react from "react";
import {Link, Outlet} from 'react-router-dom'
import {searchDatabase} from "../Utilities/ShopDatabase";
import { cartQuantity } from "../Utilities/CartFunctions";
import { useParams } from "react-router-dom";

const ProductPage =  (props) => {
    let params = useParams();
    let product = searchDatabase(params.productId);
    return(
    <div>
    <div className="productpage-totalcontainer">
        <div className="productpage-imagecontainer">
            <img src={product.img_source_one} alt={product.name} className="productpage-image"></img>
        </div>
        <div className="productpage-infocontainer">
            <div className="productpage-name">
                <h2>
                    {product.name}
                </h2>
            </div>
            <div className="productpage-desc">
                    {product.desc}
            </div>
            <div className="productpage-desc">
                <strong>Size and Fit:</strong> {product.s_f}
            </div>
            <div className="productpage-desc">
                Machine Care : {product.m_c}
            </div>
            <div className=" productpage-desc productpage-price">
                Price: {`$${product.price}`}
            </div>
            <div className="productpage-cartQ">
                {cartQuantity(props.currentCart,product,props.addToCart,props.delFromCart)}
            </div>
        </div>
    </div>
    </div>
    )

}


export default ProductPage

