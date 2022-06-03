import { Routes, Route } from "react-router-dom"
import { Home } from "../Components/Home";
// import { Product } from "../Components/Product";
import { Cart } from "../Components/Cart";
import { Navbar } from "../Components/Navbar";
import { Login } from "../Components/Login";
import { Payment } from "../Components/Payment";
import { Men } from "../Components/Men";
import { Women } from "../Components/Women";
import { MenProductDetails } from "../Components/MenProductDetails";
import {WomenProductDetails } from "../Components/WomenProductDetails";
 import {Order} from "../Components/Order";
import {Success} from "../Components/Success";
import { Land } from "../Components/Land";
import {Signup} from "../Components/Signup";

export const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/men" element={<Men />} />
                <Route path="/women" element={<Women />} />
                <Route path="/women/:id" element={<WomenProductDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/payment" element={<Payment/>} />
                <Route path="/userDetails" element={<Land/>} />
                <Route path="/men/:id" element={< MenProductDetails />} />
                <Route path="/order" element={<Order/>} />
                <Route path="/placeOrder" element={<Success/>} />
                <Route path="/payment" element={<Payment/>} />
                

            </Routes>
        </>
    )
}
