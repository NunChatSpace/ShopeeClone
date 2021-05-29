const express = require('express')
const { model } = require('../Database/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRETKEY } = require('../assets/constant')

const register = async (req) => {
    var result = {}
    var hash = await bcrypt.hash(req.body.password, 10)
    const user = new model({
        username: req.body.username,
        password: hash
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

    return  {
        status: 201,
        message: "Create user success."
    }

    // .then(
    //     hash => {
    //         const user = new model({
    //             username: req.body.username,
    //             password: hash
    //         });

    //         model.findOne({ username: req.body.username })
    //         .then(aUser => {
    //             if (aUser) {
    //                 result = {
    //                     status: 401,
    //                     message: "User already exist"
    //                 }
    //             }

    //             user.save().then(result => {
    //                 if (!result) {
    //                     result = {
    //                         status: 500,
    //                         message: "Cannot create user"
    //                     }
    //                 }

    //                 result = {
    //                     status: 201,
    //                     message: "Create user success.",
    //                     result: result
    //                 }
    //             })
    //         }).catch(err => {
    //             result = {
    //                 status: 500,
    //                 message: err
    //             }
    //         });
    //     }
    // )
}

const login = (req) => {
    model.findOne({ username: req.body.username }).then(aUser => {
        if (!aUser) {
            return {
                status: 401,
                message: "Invalid username or password"
            }
        }

        bcrypt.compare(req.body.password, aUser.password).then(result => {
            if (!result) {
                return {
                    status: 401,
                    message: "Invalid username or passwords"
                }
            }
            const token = jwt.sign(
                {
                    username: aUser.username
                },
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
        }).catch(err => {
            return {
                status: 500,
                message: err
            }
        });

    }).catch(err => {
        return {
            status: 500,
            message: err
        }
    });
}


module.exports = {
    register,
    login
}