const { assert } = require('chai')
const { after, before, describe, it } = require('mocha')

const { initData, getRecommendMenu, clearData } = require('../../src/controllers/recommendMenu.controller')

describe('Test recommendMenu.controller', () => {
    before(done = async() => {
        await clearData()
        done();
    })

    describe('init data', () => {
        it('Should contains 24 inserted data', done = async () => {
            var result = await initData();
            assert.isTrue(result.result.ok == 1, "result.result.ok = " + result.result.ok);
            assert.isTrue(result.result.n == 24, "result.result.n = " + result.result.n);
            done();
        })
    })

    after(done => {
        done();
    })
});

describe('Test recommendMenu.controller', () => {
    before(done = async() => {
        await clearData()
        await initData()
        done();
    })

    describe('getRecommendMenu', () => {
        it('Should contains data', done = async () => {
            var data = await getRecommendMenu();
            assert.isTrue(data.length > 0, "data.length = " + data.length);
            done();
        })
    })

    after(done => {
        done();
    })
})