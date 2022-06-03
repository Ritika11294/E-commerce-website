const express = require("express");

const router = express.Router();

const Cart = require("../models/cart.model");

router.post("", async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    return res.status(201).send(cart);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const carts = await Cart.find().lean().exec();
    return res.send(carts);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).lean().exec();
    res.status(201).send(cart);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(201).send(cart);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("", async (req, res) => {
  try {
    const carts = await Cart.find().lean().exec();
    Promise.all(
      carts.map((item) => {
        return Cart.findByIdAndDelete(item._id);
      })
    )
      .then(() => {
        res.json({ success: true, msg: "cart is empty" });
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();
    res.status(201).send(cart);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
