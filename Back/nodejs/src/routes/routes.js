const express = require('express');
const categoryController = require('../controllers/view/categoryMenu.controller')
const recommendController = require('../controllers/view/recommendMenu.controller')
const advertisementController = require('../controllers/view/advertisement.controller')
const itemlistController = require('../controllers/view/itemlist.controller')
const buyController = require('../controllers/view/buy.controller')
const userController = require('../controllers/view/user.controller')
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
    advertisementController.initAdvertisementData();
    itemlistController.initItemList();
    userController.initUserData();
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

router.get('/advertisement', async (req, res)=> {
    var dat = await advertisementController.getAdvertisement();
    res.status(200).json({
        status: "Success",
        count: dat.length,
        data: dat
    });
})

router.get('/itemlist', async (req, res)=> {
    var dat = await itemlistController.getItemList();
    res.status(200).json({
        status: "Success",
        count: dat.length,
        data: dat
    });
})

router.get('/buy', async (req, res)=> {
    var dat = await buyController.getItemList(req.query);
    res.status(200).json({
        status: "Success",
        data: dat
    });
})

module.exports = router;