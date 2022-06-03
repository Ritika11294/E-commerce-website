const express = require('express');

const router = express.Router();

const WomenProduct = require('../models/women.model');

router.post("", async(req, res) => {
    try{
        const womenProduct = await WomenProduct.create(req.body);
        return res.status(201).send(womenProduct)
    }catch(err) {
        return res.status(500).send(err.message)
    }

})

router.get("", async(req, res) => {
    try{
        if(req.query.price === "Low to high") {

            const womenProducts = await WomenProduct.find().lean().exec();
            const ans = womenProducts.sort((a, b) => {
                return a.price - b.price;
            })
            return res.send(ans);
        }
        else if(req.query.price === "High to low") {
            const womenProducts = await WomenProduct.find().lean().exec();
            const ans = womenProducts.sort((a, b) => {
                return b.price - a.price;
            })
            return res.send(ans)
        }
        else if (req.query.category) {
            if (req.query.category !== "All") {

                const womenProducts = await WomenProduct.find().lean().exec();
                const ans = womenProducts.filter((item) => {
                    return item.category === req.query.category
                })
                return res.status(201).send(ans)
            }
            else {
                const womenProducts = await WomenProduct.find().lean().exec();
                return res.status(201).send(womenProducts)
            }
        }
        else {
            const womenProducts = await WomenProduct.find().lean().exec();
            return res.send(womenProducts)
        }
    }catch(err) {
        return res.status(500).send(err.message);
    }
})

router.get("/:id", async(req, res) => {
    try{
        const womenProduct = await WomenProduct.findById(req.params.id).lean().exec();
        return res.send(womenProduct);
    }catch(err) {
        return res.status(500).send(err.message)
    }
})
module.exports = router;