export const SIGNUP_LOADING = "SIGNUP_LOADING";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const SIGNUP_FAILED = "SIGNUP_FAILED";

export const signup_loading = () => ({
    type: SIGNUP_LOADING,
})

export const signup_success = (user) => ({
    type: SIGNUP_SUCCESS,
    payload: user
})

export const signup_failed = () => ({
    type: SIGNUP_FAILED,
})