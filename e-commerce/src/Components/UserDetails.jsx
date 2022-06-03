import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Address.css";

export const UserDetails = () => {
  const navigate = useNavigate();
  // const userdata = JSON.parse(localStorage.getItem("userDetails")) || [];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    mobile: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    //userdata.push(form)
    localStorage.setItem("userDetails", JSON.stringify(form));
    alert("user details added")
    navigate(`/payment`);
  };
  return (
    // <div className="mainscreen">

    <div className="cardscreen">
      <h4 className="detailspay">USER DETAILS</h4>
      <div className="paymentDetails">
        <form onSubmit={handleSubmit}>
          <div style={{ gap: "10px" }} className="paydivs">
            <input
              type="text"
              className="inputbox"
              id="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              placeholder="first name"
            />

            <input
              type="text"
              className="inputbox"
              id="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              placeholder="last name"
            />
          </div>

          <div className="address">
            <input
              type="text"
              className="inputbox1"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email"
              required
            />
          </div>

          <div className="address">
            <input
              type="text"
              className="inputbox1"
              id="address"
              value={form.address}
              onChange={handleChange}
              placeholder="address"
              required
            />
          </div>

          <div style={{ gap: "10px" }} className="paydivs">
            <input
              type="text"
              className="inputbox"
              maxlength="10"
              id="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Phone number"
              required
            />

            <input
              type="text"
              className="inputbox"
              id="city"
              value={form.city}
              onChange={handleChange}
              required
              placeholder="city"
            />
          </div>

          <div style={{ gap: "10px" }} className="paydivs">
            <input
              type="text"
              className="inputbox"
              id="state"
              value={form.state}
              onChange={handleChange}
              required
              placeholder="state"
            />

            <input
              type="number"
              className="inputbox"
              id="pincode"
              value={form.pincode}
              onChange={handleChange}
              placeholder="pincode"
              required
            />
          </div>

          <input className="continue" type="submit" value={"Submit"} />

          {/* {value.map((e) => {
                    return( <button className="remove" onClick={()=>{handleRemove(e)}} >Remove</button>)
                })} */}
        </form>
      </div>
    </div>
    // </div>
  );
};
