const express = require('express');
const categoryController = require('../controllers/categoryMenu.controller')
const recommendController = require('../controllers/recommendMenu.controller')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "You are reach the endpoint."
    })
})


router.get('/init', (req, res) => {
    categoryController.initCategoryData();
    recommendController.initRecommendData();
    res.status(200).json({
        status: "Success"
    })
})


router.get('/category', async (req, res)=> {
    var dat = await categoryController.getCategoryMenu();
    res.status(200).json({
        status: "Success",
        count: dat.length,
        data: dat
    });
})

router.get('/recommend', async (req, res)=> {
    var dat = await recommendController.getRecommendMenu();
    res.status(200).json({
        status: "Success",
        count: dat.length,
        data: dat
    });
})

module.exports = router;