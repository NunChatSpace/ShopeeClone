const express = require('express');
const recommendController = require('../controllers/recommendMenu.controller')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "You are reach the endpoint."
    })
})


router.get('/init', (req, res) => {
    recommendController.initData();
    res.status(200).json({
        status: "Success"
    })
})


router.get('/getrecommendmenu', async (req, res)=> {
    var dat = await recommendController.getRecommendMenu();
    res.status(200).json({
        status: "Success",
        count: dat.length,
        data: dat
    });
})

module.exports = router;