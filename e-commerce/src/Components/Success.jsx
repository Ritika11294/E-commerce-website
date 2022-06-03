import * as React from 'react';
import {useNavigate} from "react-router-dom";
import {useEffect} from "react"
import "./Cart.css"

import axios from "axios";

export const Success = () => {

    const navigate = useNavigate();

    useEffect(() => {
        
        axios.delete(`https://backend-e-com.herokuapp.com/cart`).then((res) => {
            console.log("empty")
        })
    }, [])

    const handleClick = () => {
        navigate("/")
    }

   
    return (
        
        

        <div style={{ marginTop: "100px" }}>
           
            <img src="https://marketplace.magento.com/media/catalog/product/d/2/d2f0_ordersuccesspage_2.jpg" alt="" />

            <h1>Your Order Place Successfully!!</h1>
            <button className="payment" onClick={() => handleClick()}>Shop More</button>
            

        </div>


    );
}
