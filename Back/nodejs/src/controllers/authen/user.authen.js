const { model } = require('../../Database/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRETKEY } = require('../../assets/constant')


const register = async (req) => {
    var result = {}
    var hash = await bcrypt.hash(req.body.password, 10)
    const user = new model({
        username: req.body.username,
        password: hash,
        role: "user",
        balance: "0",
        favoriteItems: ["N/A"]
    });

    var aUser = await model.findOne({ username: req.body.username })
    if (aUser) {
        return {
            status: 401,
            message: "User already exist"
        }
    }

    var saveResult = await user.save()
    if (!saveResult) {
        return {
            status: 500,
            message: "Cannot create user"
        }
    }

    return {
        status: 201,
        message: "Create user success"
    }
}

const login = async (req) => {
    var aUser = await model.findOne({ username: req.body.username })
    if (!aUser) {
        return {
            status: 401,
            message: "Invalid username or password"
        }
    }

    var compareResult = await bcrypt.compare(req.body.password, aUser.password)
    if (!compareResult) {
        return {
            status: 401,
            message: "Invalid username or password"
        }
    }

    const token = jwt.sign(
        { username: aUser.username },
        SECRETKEY,
        {
            expiresIn: "1h"
        }
    )

    return {
        status: 200,
        token: token,
        expiresIn: 3600,
        username: aUser.username
    }
}

module.exports = {
    register,
    login
}