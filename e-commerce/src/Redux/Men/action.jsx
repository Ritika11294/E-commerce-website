import axios from "axios";

export const PRODUCT_DATA = "PRODUCT_DATA";
// export const SELECTED_DATA = "SELECTED_DATA";

export const productData = (value) => ({type: PRODUCT_DATA, payload: value});
// export const selectedData = (value) => ({type: SELECTED_DATA, payload: value});

export const getProductData = (dispatch) => {
    
        axios.get(`https://backend-e-com.herokuapp.com/menProducts`).then((res) => {
            dispatch(productData(res.data))

        })

}

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// export const ADJUST_QTY = "ADJUST_QTY";
// export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";
 
export const addToCart = (value) => ({type: ADD_TO_CART, payload: {id:value}})

// export const getAddToCart = (dispatch) => {
   
    
//     axios.get(`https://backend-e-com.herokuapp.com/cart`).then((res) => {
//         dispatch(addToCart(res.data))

//     })

// }

export const removeFromCart = (value) => ({type: REMOVE_FROM_CART, payload: {id:value}})


// export const adjustQty = (value) => ({type: ADJUST_QTY, payload: value});
// export const loadCurrentItem = (value) => ({type: LOAD_CURRENT_ITEM, payload: value})
 

