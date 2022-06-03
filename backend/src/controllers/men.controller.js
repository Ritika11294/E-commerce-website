const express = require('express');

const router = express.Router();

const MenProduct = require('../models/men.model');

router.post("", async (req, res) => {
    try {
        const menProduct = await MenProduct.create(req.body);
        return res.status(201).send(menProduct)
    } catch (err) {
        return res.status(500).send(err.message)
    }

})

router.get("", async (req, res) => {
    //console.log(req.query.category)
    try {
        if (req.query.price === "Low to high") {

            const menProducts = await MenProduct.find().lean().exec();
            const ans = menProducts.sort((a, b) => {
                return a.price - b.price
            })
            return res.send(ans)

        }
        else if (req.query.price === "High to low") {
            const menProducts = await MenProduct.find().lean().exec();
            const ans = menProducts.sort((a, b) => {
                return b.price - a.price
            })
            return res.send(ans)
        }
        else if (req.query.category) {
            if (req.query.category !== "All") {

                const menProducts = await MenProduct.find().lean().exec();
                const ans = menProducts.filter((item) => {
                    return item.category === req.query.category
                })
                return res.status(201).send(ans)
            }
            else {
                const menProducts = await MenProduct.find().lean().exec();
                return res.status(201).send(menProducts)
            }
        }

        else {
            const menProducts = await MenProduct.find().lean().exec();
            return res.send(menProducts)
        }

    } catch (err) {
        return res.status(500).send(err.message);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const menProduct = await MenProduct.findById(req.params.id).lean().exec();
        return res.send(menProduct);
    } catch (err) {
        return res.status(500).send(err.message)
    }
})
module.exports = router;