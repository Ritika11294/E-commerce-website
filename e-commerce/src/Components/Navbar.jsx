import * as React from "react";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./Nav.css";


export function Navbar() {
  const cart = useSelector((store) => store.products.cart);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    getCart()
  }, [cart, cartCount]);
  
  const getCart = () => {
    
    axios.get(`https://backend-e-com.herokuapp.com/cart`).then((res) => {
      setCartCount(res.data.length);
      getCart()
      //console.log(res.data)
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="Nav"
        position="fixed"
        style={{ backgroundColor: "white", top: "0px" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            // color="inherit"

            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/" style={{ color: "black" }}>
              <MenuIcon />
            </Link>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            <Link to="/men" style={{ textDecoration: "none", color: "black" }}>
              {"Men"}
            </Link>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black", marginRight: "70%" }}
          >
            <Link
              to="/women"
              style={{ textDecoration: "none", color: "black" }}
            >
              {"Women"}
            </Link>
          </Typography>

          <Button color="inherit">
            {" "}
            <Link to="##" style={{ textDecoration: "none", color: "black" }}>
              <FavoriteIcon />
            </Link>
          </Button>
          <Button color="inherit">
            {" "}
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              <Badge badgeContent={cartCount} style={{ color: "black" }}>
                <ShoppingCart color="action" />
              </Badge>
            </Link>
          </Button>

          <Button color="inherit">
            {" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              {"Login"}
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
