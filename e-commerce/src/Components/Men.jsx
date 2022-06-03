import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../Redux/Men/action";
import axios from "axios";
import "./Men.css"
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { productData } from "../Redux/Men/action";

export const Men = () => {


    const navigate = useNavigate();


    const { products } = useSelector((store) => store.products);


    const dispatch = useDispatch();

    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = () => {
        // axios.get(`https://backend-e-com.herokuapp.com/menProducts`).then((res) => {
        //     dispatch(productData(res.data))

        // })
        dispatch(getProductData)
    }



    const sortingCost = (e) => {
        var price
        // let sort = e.target.value;
        // axios.get(`https://backend-e-com.herokuapp.com/menProducts`).then((res) => {
        //     let costSort = res.data;
        //     //console.log(costSort)

        //     if (sort === "Low to high") {
        //         const store = costSort.sort((a, b) => {
        //             return a.price - b.price
        //         })
        //         dispatch(productData(store))
        //     }
        //     else if (sort === "High to Low") {
        //         const store = costSort.sort((a, b) => {
        //             return b.price - a.price
        //         })
        //         dispatch(productData(store))
        //     }
        //     else {
        //         dispatch(productData(costSort))
        //     }

        // })
        if(e.target.value === "Low") {
            price = "Low to high";
        }
        else if(e.target.value === "High"){
            price = "High to low";
        }
        else {
            price = price
        }
        
        axios.get(`https://backend-e-com.herokuapp.com/menProducts?price=${price}`).then((res) => {
            dispatch(productData(res.data))
        })
    }


    const [filt, setFilt] = useState("");

    const handleFilter = (e) => {
        let { value } = e.target;
        // console.log(value);
        setFilt(value)

    }



    return (
        <div className="outerBox">
            <div className="sort">
                <select id="sort" onChange={sortingCost}>
                    <option value="----">Sort by Price</option>
                    <option value="Low"  >Low to High</option>
                    <option value="High" >High to Low</option>

                </select>
            </div>
            <div className="main" >

                <div className="left">
                    <div style={{ textAlign: 'center' }} className="filterCat" >
                        {/* <h5>Filter by Categories </h5> */}
                    </div>
                    <div className="list">
                        {/* <label >All</label>
                        <input type="radio" checked={filt === ""} onChange={handleFilter} value="" /> <br />
                        <label>Shirts</label>
                        <input type="radio" checked={filt === "Shirts"} onChange={handleFilter} name="shirts" value="Shirts" /> <br />
                        <label>T-Shirts</label>
                        <input type="radio" checked={filt === "T-Shirt"} onChange={handleFilter} name="t-shirt" value="T-Shirt" /> <br />
                        <label>Joggers</label>
                        <input type="radio" checked={filt === "Joggers"} onChange={handleFilter} name="joggers" value="Joggers" /><br />
                        <label >Jeans</label>
                        <input type="radio" checked={filt === "Jeans"} onChange={handleFilter} name="jeans" value="Jeans" /> */}

                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label" style={{color:"black"}}>Filter by Categories </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel checked={filt === ""} onChange={handleFilter} value="" control={<Radio />} label="All" />
                                <FormControlLabel checked={filt === "Shirts"} onChange={handleFilter} name="shirts" value="Shirts" control={<Radio />} label="Shirts" />
                                <FormControlLabel checked={filt === "T-Shirt"} onChange={handleFilter} name="t-shirt" value="T-Shirt" control={<Radio />} label="T-Shirts" />
                                <FormControlLabel checked={filt === "Joggers"} onChange={handleFilter} name="joggers" value="Joggers" control={<Radio />} label="Joggers" />
                                <FormControlLabel checked={filt === "Jeans"} onChange={handleFilter} name="jeans" value="Jeans" control={<Radio />} label="Jeans" />
                            </RadioGroup>
                        </FormControl>

                    </div>

                </div>

                <div className="right">

                    {products.filter((el) => {
                        if (filt) {
                            return el.category === filt
                        }
                        else {
                            return products
                        }
                    }).map((e) => (
                        <div className="subDiv" key={e._id} onClick={() => { navigate(`/men/${e._id}`) }}>
                            <div className="imageDiv">
                                <img src={e.img} alt="" width="85%" />
                            </div>
                            <div className="productInfo">
                                <h3 className="title">{e.title}</h3>
                                <div className="cartBtn" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p className="price">{e.price}</p>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>



    )
}