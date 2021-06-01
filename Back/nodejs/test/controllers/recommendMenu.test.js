const { assert } = require('chai')
const { after, before, describe, it } = require('mocha')

const { initRecommendData, getRecommendMenu, clearRecommendData } = require('../../src/controllers/view/recommendMenu.controller')

describe('Test recommendMenu.controller', () => {
    before(async () => {
        await clearRecommendData();
    })

    describe('init data', () => {
        it('Should return ok', done = async () => {
            var result = await initRecommendData();
            assert.isTrue(result.result.ok == 1, "result.result.ok = " + result.result.ok);
            done();
        })
    })

    after(async () => {
        await clearRecommendData();
    })
});

describe('Test recommendMenu.controller', () => {
    before(async() => {
        await clearRecommendData();
        await initRecommendData();
    })

    describe('getRecommendMenu', () => {
        it('Should contains data', done = async () => {
            var data = await getRecommendMenu();
            assert.isTrue(data.length > 0, "data.length = " + data.length);
            done();
        })
    })

    after(async() => {
        await clearRecommendData();
    })
})