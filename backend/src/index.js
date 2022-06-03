const express = require('express');
const cors = require('cors');
const connect = require('./configs/db');
const port = process.env.PORT || 3001;

const menController = require('./controllers/men.controller');
const womenController = require('./controllers/women.controller');
const cartController = require('./controllers/cart.controller');

const {register, login} = require('./controllers/auth.controller')

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", register);
app.post("/login", login)
app.use("/menProducts", menController);
app.use("/womenProducts", womenController);
app.use("/cart", cartController);


app.listen(port, async function () {
    try{
        await connect();
        console.log(`listening on port ${port}`)
    }catch (error) {
        console.log('error: ', error)
    }
})
