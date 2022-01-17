import react from "react";
import {Link, Outlet} from 'react-router-dom'
import {searchDatabase} from "../Utilities/ShopDatabase";
import { useParams } from "react-router-dom";

const ProductPage =  () => {
    let params = useParams();
    console.log(params.productId);
    return(
    <div>
        <h2>
            {params.productId}
        </h2>
    </div>
    )

}


export default ProductPage

