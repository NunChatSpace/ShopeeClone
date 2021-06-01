const { assert } = require('chai')
const { after, before, describe, it } = require('mocha')
const {
    getItemList,
    initItemList,
    clearItemList 
} = require('../../src/controllers/view/itemlist.controller')


describe('Test itemlist.controller', () => {
    before(async () => {
        await clearItemList();
    })

    describe('init data', done =  () => {
        it('Should return ok', async () => {
            var result = await initItemList();
            assert.isTrue(result.result.ok == 1, "result.result.ok = " + result.result.ok);
            done();
        })
    })

    after(async () => {
        await clearItemList();
    })
});


describe('Test itemlist.controller', () => {
    before(async () => {
        await clearItemList();
        await initItemList();
    })

    describe('getItemlist', done =  () => {
        it('Should return data', async () => {
            var result = await getItemList();
            assert.isTrue(result != undefined, "result.data = " + result);
            assert.isTrue(result[0].src != undefined, "result.data[0].src = " + result[0].src);
            assert.isTrue(result[0].url != undefined, "result.data[0].url = " + result[0].url);
            done();
        })
    })

    after(async () => {
        await clearItemList();
    })
});