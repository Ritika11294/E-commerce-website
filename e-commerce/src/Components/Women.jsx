import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWomenProductData } from "../Redux/Women/action";
import axios from "axios";
import {WomenProductData } from "../Redux/Women/action"
import "./Men.css"
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export const Women = () => {


    const navigate = useNavigate();


    const { womenProduct } = useSelector((store) => store.womenProduct);


    const dispatch = useDispatch();

    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = () => {
        // axios.get(`https://backend-e-com.herokuapp.com/womenProducts`).then((res) => {
        //     dispatch(WomenProductData(res.data))

        // })
        dispatch(getWomenProductData)
    }



    const sortingCost = (e) => {
        // let sort = e.target.value;
        // axios.get(`http://localhost:3001/womenProducts`).then((res) => {
        //     let costSort = res.data;
        //     //console.log(costSort)

        //     if (sort === "Low to high") {
        //         const store = costSort.sort((a, b) => {
        //             return a.price - b.price
        //         })
        //         dispatch(WomenProductData(store))
        //     }
        //     else if (sort === "High to Low") {
        //         const store = costSort.sort((a, b) => {
        //             return b.price - a.price
        //         })
        //         dispatch(WomenProductData(store))
        //     }
        //     else {
        //         dispatch(WomenProductData(costSort))
        //     }

        // })
        var price
        if(e.target.value === "Low") {
            price = "Low to high";
        }
        else if(e.target.value === "High"){
            price = "High to low";
        }
        else {
            price = price
        }
        
        axios.get(`https://backend-e-com.herokuapp.com/womenProducts?price=${price}`).then((res) => {
            dispatch(WomenProductData(res.data))
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

                <div className="left" style={{ height: '280px'}}>
                    <div style={{ textAlign: 'center'}} className="filterCat" >
                    </div>
                    <div className="list">
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label" style={{ color: "black" }}>Filter by Categories </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel checked={filt === ""} onChange={handleFilter} value="" control={<Radio />} label="All" />
                                <FormControlLabel checked={filt === "Dresses"} onChange={handleFilter} name="dresses" value="Dresses" control={<Radio />} label="Dresses" />
                                <FormControlLabel checked={filt === "Tops"} onChange={handleFilter} name="tops" value="Tops" control={<Radio />} label="Tops" />
                                <FormControlLabel checked={filt === "T-Shirts"} onChange={handleFilter} name="t-shirts" value="T-Shirts" control={<Radio />} label="T-Shirts" />
                                <FormControlLabel checked={filt === "Ethnic Wear"} onChange={handleFilter} name="ethnic wear" value="Ethnic Wear" control={<Radio />} label="Ethnic Wear" />
                                <FormControlLabel checked={filt === "Jeans"} onChange={handleFilter} name="jeans" value="Jeans" control={<Radio />} label="Jeans" />
                            </RadioGroup>
                        </FormControl>

                    </div>

                </div>

                <div className="right">

                    {womenProduct.filter((el) => {
                        if (filt) {
                            return el.category === filt
                        }
                        else {
                            return womenProduct
                        }
                    }).map((e) => (
                        <div className="subDiv" key={e._id} onClick={() => { navigate(`/women/${e._id}`) }}>
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