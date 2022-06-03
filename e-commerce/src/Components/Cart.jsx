import "./Cart.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CurrencyRupee from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
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
    //console.log(items, price);
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

  const increment = (e) => {
    e.qty++;
    axios
      .patch(`https://backend-e-com.herokuapp.com/cart/${e._id}`, e)
      .then(() => {
        getData();
      });
    alert("Quantity Increase");
  };
  const decrement = (e) => {
    //e.qty--;
    // if (!e.qty) {
    //   handleRemove(e._id);
    // }
    if (e.qty > 1) {
      e.qty--;
    }
    axios
      .patch(`https://backend-e-com.herokuapp.com/cart/${e._id}`, e)
      .then(() => {
        getData();
      });
    alert("Quantity Decrease");
  };

  const handleRemove = (id) => {
    axios
      .delete(`https://backend-e-com.herokuapp.com/cart/${id}`)
      .then((res) => {
        //console.log(res.data)
        getData();
      });
    alert("Item remove from the cart");
  };

  const handlePay = () => {
    // alert("User Needs to Login!!");
    navigate(`/userDetails`);
  };

  return (
    <>
      {loading ? (
        <div style={{ marginTop: "80px" }}>loading...</div>
      ) : (
        <div>
          <div className="mainCart">
            <h5>
              Total Amount : <span>{totalPrice}</span>{" "}
            </h5>
            <div className="subCart">
              {value.map((e) => (
                <div key={e._id} className="imageCart">
                  <div className="subimageCart">
                    <img src={e.img} alt="" width="40%" />
                  </div>
                  <div className="description">
                    <p>{e.title}</p>
                    <div className="currency">
                      <CurrencyRupee /> {e.price * e.qty}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        height: "20px",
                        margin: "auto",
                      }}
                    >
                      <div style={{ cursor: "pointer" }}>
                        <span
                          onClick={() => {
                            increment(e);
                          }}
                        >
                          {" "}
                          +{" "}
                        </span>
                        <span>{e.qty}</span>
                        <span
                          onClick={() => {
                            decrement(e);
                          }}
                        >
                          {" "}
                          -{" "}
                        </span>
                      </div>
                      {/* <h5 className="Qty">Qty : {add}</h5> */}
                      {/* <div >
                                      <button onClick={() => { handleAdd(1) }} >+</button>

                                      <button onClick={() => { handleAdd(-1) }}>-</button>

                                     
                                  </div> */}
                      {/* <input type="number" placeholder="quantity" 
              
                  style={{
                    width: "40%",
                    height: "33px",
                    border: "1px solid black",
                    
                  }} */}
                      {/* /> */}
                      <button
                        className="remove"
                        onClick={() => {
                          handleRemove(e._id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="payment"
            onClick={() => {
              handlePay();
            }}
          >
            PLACE ORDER
          </button>
        </div>
      )}
    </>
  );
};
