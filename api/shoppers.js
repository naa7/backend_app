const express = require("express");
const router = express.Router();
const { Shopper } = require('../db/models');

// Root here is localhost:8080/api/shoppers/
router.get('/', async (req, res, next) => {
    try {
        // Shopper.findAll === SELECT * FROM Shopper;
        const allShoppers = await Shopper.findAll();
        // if (allShoppers) {
        //     res.status(200).json(allShoppers);
        // } else {
        //     res.status(404).send('Shoes Listing Not Found');
        // }
        
        // code below is the same as the if statement above
        allShoppers 
            ? res.status(200).json(allShoppers)
            : res.status(404).send('Shoes Listing Not Found');


    } catch(error) {
        next(error);
    }
});

module.exports = router;