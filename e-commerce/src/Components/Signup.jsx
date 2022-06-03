import React from 'react';
import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button
} from '@material-ui/core';

import axios from "axios";
import { useNavigate } from "react-router-dom";



export const Signup = () => {


    const [data, setData] = React.useState(false);


    const navigate = useNavigate();

    const [checked, setChecked] = React.useState(true);



    const [values, setValues] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });



    const handleChange = (event) => {
        // setChecked(event.target.checked)
       const {id, value} = event.target
       setValues({...values, [id]:value})
    };

    const handleSubmit = () => {
        setData(true);
        axios.post(`https://backend-e-com.herokuapp.com/register`, values)
            .then((res) => {
                console.log(res)
                setData(false);
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
                alert("registration failed");
            })
    }





    return (
        <div style={{ padding: 50, marginTop: "70px" }}>
            <Paper>
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={10}>
                        <TextField label="First Name" type="text" id = "firstName" onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Last Name" type="text" id ="lastName" onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email" type="text" id = "email" onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type="password" id = "password" onChange={handleChange}></TextField>

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
                        <Button fullWidth disabled={values.firstName === "" || values.lastName == "" || values.email === "" || values.password === ""}
                            onClick={() => handleSubmit()}> Register </Button>

                    </Grid>

                </Grid>
            </Paper>
        </div>
    );
};


