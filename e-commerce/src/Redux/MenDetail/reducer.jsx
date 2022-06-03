
import { SELECTED_DATA} from "./action"

const initState = {
   
    product:{}
};



export const productSelectReducer = (store = initState, {type, payload}) =>{
    switch(type){
        case SELECTED_DATA:
            return {...store, ...payload}
            default:
                return store;
    }
}

