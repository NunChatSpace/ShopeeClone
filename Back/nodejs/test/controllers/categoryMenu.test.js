const { assert } = require('chai')
const { after, before, describe, it } = require('mocha')

const { initCategoryData, getCategoryMenu, clearCategoryData } = require('../../src/controllers/view/categoryMenu.controller')

describe('Test categoryMenu.controller', () => {
    before(async () => {
        await clearCategoryData();
    })

    describe('init data', () => {
        it('Should return ok', done = async () => {
            var result = await initCategoryData();
            assert.isTrue(result.result.ok == 1, "result.result.ok = " + result.result.ok);
            done();
        })
    })

    after(async () => {
        await clearCategoryData();
    })
});

describe('Test categoryMenu.controller', () => {
    before(async () => {
        await clearCategoryData();
        await initCategoryData();
    })

    describe('getCategoryMenu', () => {
        it('Should contains data', done = async () => {
            var data = await getCategoryMenu();
            assert.isTrue(data.length > 0, "data.length = " + data.length);
            done();
        })
    })

    after(async () => {
        await clearCategoryData();
    })
})