const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://ritika:ritika123@cluster0.lcegw.mongodb.net/e-commerce?retryWrites=true&w=majority"
  );
};

module.exports = connect;
