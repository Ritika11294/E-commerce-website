import {SIGNUP_LOADING, SIGNUP_SUCCESS, SIGNUP_FAILED} from "./action";

const initialState = {
    "loading": false,
    "failed": false,
    "users": []
}

export const signupReducer = (store = initialState, {type, payload}) => {
    switch (type) {
        case SIGNUP_LOADING:
            return {...store, "loading": true};

        case SIGNUP_SUCCESS:
            return {"loading": false, "failed": false, "users": payload};

        case SIGNUP_FAILED:
            return {"loading": false, "failed": true};
         
        default:
            return store
    }
}