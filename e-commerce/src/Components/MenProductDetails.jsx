import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedData } from "../Redux/MenDetail/action";
import { useParams } from "react-router-dom";
import { addToCart } from "../Redux/Men/action";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import "./Men.css";

export const MenProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((store) => store.product);
  //console.log(product)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [age, setAge] = React.useState("");

  const [toggleCart, setToggleCart] = useState(false);

  // const toggleTodo = (id) => {
  //     const updatedTodo = todos.map((data) =>
  //         data.id === id ? { ...data, status: !data.status } : data
  //     );
  //     setTodos(updatedTodo);
  // };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    getIndividualProduct();
  }, [id]);

  const getIndividualProduct = () => {
    axios
      .get(`https://backend-e-com.herokuapp.com/menProducts/${id}`)
      .then((res) => {
        dispatch(selectedData(res.data));

        //console.log(res.data)
      });
  };

  const handleCart = () => {
    axios
      .post(`https://backend-e-com.herokuapp.com/cart`, {...product, qty:1})
      .then((res) => {
        dispatch(addToCart(res.data._id));
      });
      alert("Item is added to the cart")
  };

  return (
    <div style={{ marginTop: "100px" }} className="mainBox">
      <div className="leftProd">
        <img src={product.img} alt="" />
      </div>
      <div className="rightProd">
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Size</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Size"
              onChange={handleChange}
            >
              <MenuItem value={10}>S</MenuItem>
              <MenuItem value={20}>M</MenuItem>
              <MenuItem value={30}>L</MenuItem>
              <MenuItem value={40}>XL</MenuItem>
              <MenuItem value={50}>28</MenuItem>
              <MenuItem value={60}>30</MenuItem>
              <MenuItem value={70}>32</MenuItem>
              <MenuItem value={80}>34</MenuItem>
              <MenuItem value={90}>36</MenuItem>
              <MenuItem value={100}>38</MenuItem>
              <MenuItem value={110}>40</MenuItem>
              <MenuItem value={120}>42</MenuItem>
              <MenuItem value={130}>44</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <button
            style={{ cursor: "pointer", width: "70%", marginTop: "30px" }}
            className="add"
            onClick={handleCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
