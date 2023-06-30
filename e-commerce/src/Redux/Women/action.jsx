import axios from "axios";

export const WOMEN_PRODUCT_DATA = "WOMEN_PRODUCT_DATA";


export const WomenProductData = (value) => ({type: WOMEN_PRODUCT_DATA, payload: value});

export const getWomenProductData = (dispatch) => {
    
    axios.get(`https://e-commerce-api-uljp.onrender.com/womenProducts`).then((res) => {
        dispatch(WomenProductData(res.data))

    })

}

 