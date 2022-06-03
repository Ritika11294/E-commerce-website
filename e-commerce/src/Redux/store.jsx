

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { dataReducer } from "../Redux/Home/reducer";
import { productReducer } from "./Men/reducer";
import { womenReducer} from "./Women/reducer"
import {signupReducer} from "./Signup/reducer"
// import {cartReducer} from "./Men/reducer"
import {productSelectReducer} from "./MenDetail/reducer"
// import {womenSelectReducer} from "./WomenDetail/reducer"
import {reducer} from  "./Login/reducer";


const rootReducer = combineReducers({
    data : dataReducer,
    products : productReducer,
    product : productSelectReducer,
    womenProduct: womenReducer,
    reducer: reducer,
    signup: signupReducer
    // womenpro:womenSelectReducer,
    // cart :cartReducer

})
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk))
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());