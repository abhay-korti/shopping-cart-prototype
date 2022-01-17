import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PageNotFound = () => {
    let navigation = useNavigate();
    return(
    <>
        <h2>
            Page Not Found!
        </h2>
        <button onClick={() => {
            navigation(-1)
        }}>Click here to go back</button>
    </>
    )
}
export default PageNotFound