import {WOMEN_PRODUCT_DATA} from "./action";

const initState = {
    womenProduct:[]
};

export const womenReducer = (store = initState, {type, payload}) =>{
    switch(type){
        case WOMEN_PRODUCT_DATA:
            return {...store, womenProduct: payload}
            default:
                return store;
    }
}