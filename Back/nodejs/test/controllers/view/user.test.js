const { assert } = require('chai')
const { after, before, describe, it } = require('mocha')
const {
    getUserData,
    initUserData,
    clearUserData
} = require('../../src/controllers/view/user.controller')


describe('Test user.controller', () => {
    before(async () => {
        await clearUserData();
    })

    describe('init data', () => {
        it('Should return ok', done = async () => {
            var result = await initUserData();
            assert.isTrue(result.result.ok == 1, "result.result.ok = " + result.result.ok);
            done();
        })
    })

    before(async () => {
        await clearUserData();
    })
});

describe('Test user.controller', () => {
    before(async () => {
        await clearUserData();
        await initUserData();
    })

    describe('getUserData', () => {
        it('Should contains data', done = async () => {
            var data = await getUserData();
            assert.isTrue(data.length > 0, "data.length = " + data.length);
            done();
        })
    })

    after(async () => {
        await clearUserData();
    })
})


