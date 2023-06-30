import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import { useDispatch } from "react-redux";
import { loginRequest } from '../Redux/Login/action';
import axios from "axios";
import {useNavigate} from "react-router-dom";



export const Login = () => {

  const [data, setData] = React.useState(false);

  const dispatch = useDispatch();
 
   const navigate = useNavigate();

   const [checked, setChecked] = React.useState(true);

   const [values, setValues] = React.useState({
    email: "",
    password: "",
    // showPassword: false,
  });



  const handleChange = (prop) => (event) => {
    // setChecked(event.target.checked)
    setValues({ ...values, [prop]: event.target.value });
  };


  const handleSubmit = () => {
    setData(true);
    axios.post(`https://e-commerce-api-uljp.onrender.com/login`, {
      email: values.email,
      password: values.password,
    })
    .then((res) => {
      setData(false);
      dispatch(loginRequest(res.data));
      alert("User logged in successfully")
      navigate("/");
    })
    .catch((err) => {
      console.log(err);
      setData(false);
      alert("login failed")
    })
  }
  return (
    <div style={{ padding: 50, marginTop:"70px" }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Username" type="text" value={values.email} onChange={handleChange("email" )}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type="password" value={values.password} onChange={handleChange("password")}></TextField>
           
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth disabled = {values.email === "" || values.password === ""}
            onClick={() => handleSubmit()}> Login </Button>

          </Grid>
          <Grid item xs={12}>
            <Button onClick={()=> {navigate("/register")}} fullWidth>New Member ? Start here</Button>

          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};


