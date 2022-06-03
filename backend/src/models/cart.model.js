const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    // cartData:{type: Object, required: true},
    img: { type: 'String', required: true },
    title: { type: 'String', required: true },
    category: { type: 'String', required: true },
    price: { type: Number, required: true },
    size: [{ type: 'String', required: true }],
    qty: { type: Number, required: true},
}, {
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("cart", cartSchema)