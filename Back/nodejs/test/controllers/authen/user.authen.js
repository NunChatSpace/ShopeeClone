const { assert } = require('chai');
const { after, before, describe, it } = require('mocha');
const {
    getUserData,
    initUserData,
    clearUserData
} = require('../../src/controllers/view/user.controller');

const {
    register,
    login
} = require('../../src/controllers/authen/user.authen');


describe('Test user.controller', () => {
    before(async () => {
        await clearUserData();
        await initUserData();
    })

    describe('register', () => {
        it('Should return 401', done = async () => {
            const req = {
                body: {
                    username: "nunz9684",
                    password: "123456789"
                }
            }
            var data = await register(req);
            assert.isTrue(data.status == 401, "data.status = " + data.status);
            assert.isTrue(data.message === "User already exist", "data.message = " + data.message);
            done();
        })

        it('Should return 201', done = async () => {
            const req = {
                body: {
                    username: "AlwaysSuccess",
                    password: "123456789"
                }
            }
            var data = await register(req);
            assert.isTrue(data.status == 201, "data.status = " + data.status);
            assert.isTrue(data.message === "Create user success", "data.message = " + data.message);
            done();
        })
    })

    after(async () => {
        await clearUserData();
    })
})

describe('Test user.controller', () => {
    before(async () => {
        await clearUserData();
        await initUserData();
    })

    describe('login', () => {
        it('Should return 401 when invalid username', done = async () => {
            const req = {
                body: {
                    username: "nunzzz9684",
                    password: "123456789"
                }
            }
            var data = await login(req);
            assert.isTrue(data.status == 401, "data.status = " + data.status);
            assert.isTrue(data.message === "Invalid username or password", "data.message = " + data.message);
            done();
        })

        it('Should return 401 when invalid password', done = async () => {
            const req = {
                body: {
                    username: "nunz9684",
                    password: "1234567899999"
                }
            }
            var data = await login(req);
            assert.isTrue(data.status == 401, "data.status = " + data.status);
            assert.isTrue(data.message === "Invalid username or password", "data.message = " + data.message);
            done();
        })

        it('Should return 200', done = async () => {
            const req = {
                body: {
                    username: "nunz9684",
                    password: "123456789"
                }
            }
            var data = await login(req);
            assert.isTrue(data.status === 200, "data.status = " + data.status);
            assert.isTrue(data.token != undefined, "data.token != " + data.token);
            assert.isTrue(data.expiresIn == 3600, "data.expiresIn = " + data.expiresIn);
            assert.isTrue(data.username == req.body.username, "data.username = " + data.username);
            done();
        })
    })

    after(async () => {
        await clearUserData();
    })
})