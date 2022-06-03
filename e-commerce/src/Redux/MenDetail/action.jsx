import axios from "axios";
export const SELECTED_DATA = "SELECTED_DATA";

export const selectedData = (value) => ({
  type: SELECTED_DATA,
  payload: value,
});

// export const getSelectedData  = (id) => (dispatch) => {
//   axios
//     .get(`https://backend-e-com.herokuapp.com/menProducts/${id}`)
//     .then((res) => {
//       dispatch(selectedData(res.data));
//     });
// };
