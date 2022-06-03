import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CurrencyRupee from "@mui/icons-material/CurrencyRupee";
import "./Order.css";

export const Order = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [add, setAdd] = useState(1);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let items = 0;
    let price = 0;

    for (let i = 0; i < value.length; i++) {
      items += value[i].qty;
      price += value[i].qty * value[i].price;
    }
    console.log(items, price);
    setTotalPrice(price);
    setTotalItem(items);
  }, [totalItem, value]);

  const getData = () => {
    setLoading(true);
    axios.get(`https://backend-e-com.herokuapp.com/cart`).then((res) => {
      setValue(res.data);
      setLoading(false);
      //console.log(res.data)
    });
  };

  // const increment = (e) => {
  //     e.qty++;
  //     axios
  //       .patch(`https://backend-e-com.herokuapp.com/cart/${e._id}`, e)
  //       .then(() => {
  //         getData();
  //       });
  //   };
  //   const decrement = (e) => {
  //       if(e.qty > 1) {

  //           e.qty--;
  //       }
  //     // if (!e.qty) {
  //     //  // handleRemove(e._id);
  //     // }
  //     axios
  //       .patch(`https://backend-e-com.herokuapp.com/cart/${e._id}`, e)
  //       .then(() => {
  //         getData();
  //       });
  //   };

  let userDetails = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <>
      {loading ? (
        <div style={{ marginTop: "80px" }}>loading...</div>
      ) : (
        <div style={{ marginTop: "80px" }}>
          <div className="mainOrder">
            <h2>ORDER SUMMARY</h2>
            <div style={{ display: "flex" }} className="orderSummary">
              <div className="Leftorder">
                <p>
                  Delivered to {userDetails.firstName} {userDetails.lastName}
                </p>
                <p>
                  Address: {userDetails.address}, {userDetails.city},{" "}
                  {userDetails.state}, {userDetails.pincode}
                </p>
                <p>Mobile: {userDetails.mobile}</p>
              </div>
              <div className="rightmain">
                <div className="rightorder">
                  <h3 style={{ fontSize: "20px" }}>
                    Total Amount : <span>{totalPrice}</span>{" "}
                  </h3>
                  {value.map((e) => (
                    <div key={e.id} className="imageOrder">
                      <div className="">
                        <img src={e.img} alt="" width="40%" />
                      </div>
                      <div className="desecp">
                        <p>{e.title}</p>
                        <div className="currencyOrder">
                          <CurrencyRupee /> {e.price * e.qty}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            height: "20px",
                            margin: "auto",
                          }}
                        >
                          <h5 className="Qty1">Qty : {e.qty}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            className="Orderpay"
            onClick={() => {
              navigate(`/placeOrder`);
            }}
          >
            Place Order
          </button>
        </div>
      )}
    </>
  );
};
