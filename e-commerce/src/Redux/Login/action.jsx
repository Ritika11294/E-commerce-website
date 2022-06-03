const LOGIN = "LOGIN";



const loginRequest = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}



export { loginRequest , LOGIN };