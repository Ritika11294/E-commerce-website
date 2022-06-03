import React from "react";
import { useState, useEffect } from "react";
import dataImages from "./data";
import "./Home.css";
// import axios from "axios";
import { getAddData } from "../Redux/Home/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Carousel } from "./Slider";
// import {Footer} from "./Footer"

export const Home = () => {
  const { data } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [items] = useState(dataImages);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // axios.get(` https://e-commerce-json.herokuapp.com/data `).then((res) => {
    //     dispatch(addData(res.data))

    // })
    setLoading(true);
    dispatch(getAddData());
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div style={{ marginTop: "70px" }}>loading...</div>
      ) : (
        <div>
          <div style={{ marginTop: "70px" }}>
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://assets.ajio.com/cms/AJIO/WEB/14052022-D-unisex-topbannercarousel-p4-m&s-3070.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://assets.ajio.com/cms/AJIO/WEB/14052022-D-unisex-topbannercarousel-p3-westernwear-brands-5075extraupto35.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://assets.ajio.com/cms/AJIO/WEB/14052022-D-unisex-topbannercarousel-p5-brands-4070.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="category">
            <p className="discount">POPULAR CATEGORY</p>
          </div>

          <div className="container">
            {data.map((e, i) => (
              <div key={i}>
                <img
                  src={e.image}
                  alt=""
                  onClick={() => {
                    navigate("/women");
                  }}
                />
              </div>
            ))}
          </div>
          <p className="discount">DISCOUNT PE DISCOUNT</p>
          <div className="imageBox1">
            {data.map((e, i) => {
              return (
                <div key={i}>
                  <img src={e.images} alt="" width="100%" />
                </div>
              );
            })}
          </div>

          <p className="discount">Customize your T-shirts</p>
          <div>
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Byou-men-desk-1651215919.jpg"
              alt=""
            />
          </div>

          <p className="discount">BESTSELLERS FOR MEN</p>
          <div className="imageBox2">
            {items.map((e, i) => {
              return (
                <div key={i}>
                  <img
                    src={e.imagesMen}
                    alt=""
                    onClick={() => {
                      navigate("/men");
                    }}
                    width="100%"
                  />
                </div>
              );
            })}
          </div>

          <p className="discount">T-SHIRTS UNDER 299</p>
          <div>
            <Carousel />
          </div>

          {/* <div>
              <Footer/>
          </div> */}
        </div>
      )}
    </>
  );
};
