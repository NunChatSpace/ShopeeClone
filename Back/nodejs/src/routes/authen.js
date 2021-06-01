const express = require('express');
const authenRouter = express.Router();
const userController = require('../controllers/view/user.controller')

authenRouter.post('/login', async (req, res) => {
    var response = await userController.login(req);
    res.status(response.status).json(response);
})

authenRouter.post('/register', async (req, res) => {
    var result = await userController.register(req);
    res.status(result.status).json(result);
})

module.exports = authenRouter;