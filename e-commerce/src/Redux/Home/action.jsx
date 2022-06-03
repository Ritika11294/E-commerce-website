import axios from "axios";
export const GET_DATA = "GET_DATA";  //action type


export const addData = (value) => ({type: GET_DATA, payload: value});   //action creator

export const getAddData = () => (dispatch) => {
   console.log(dispatch);
    axios.get(` https://e-commerce-json.herokuapp.com/data `).then((res) => {
        dispatch(addData(res.data))

    })
} 

