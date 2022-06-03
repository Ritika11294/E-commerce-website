const mongoose = require("mongoose");

const menProductSchema = new mongoose.Schema({
    img:{type: 'String', required: true},
    title: {type: 'String', required: true},
    category: {type: 'String', required: true},
    price: {type: Number, required: true},
    size:[{type: 'String', required: true}]

},{ 
    versionKey: false,
    timestamps:true,
})

module.exports = mongoose.model("menProduct", menProductSchema)