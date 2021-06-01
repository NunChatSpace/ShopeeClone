const { assert } = require('chai')
const { after, before, describe, it } = require('mocha')
const {
    getItemlistData,
    initItemlistData,
    clearItemlistData 
} = require('../../src/controllers/view/itemlist.controller')


describe('Test itemlist.controller', () => {
    before(async () => {
        await clearUserData();
    })

    describe('init data', () => {
        it('Should return ok', async () => {
            var result = await initItemlistData();
            assert.isTrue(result.result.ok == 1, "result.result.ok = " + result.result.ok);
        })
    })

    before(async () => {
        await clearUserData();
    })
});


describe('Test itemlist.controller', () => {
    before(async () => {
        await initItemlistData();
    })

    describe('getItemlistData', () => {
        it('Should return itemlist', async () => {
            var result = await getItemlistData();
            assert.isTrue(result.itemlist != undefined, "result.itemlist = " + result.itemlist);
            assert.isTrue(result.itemlist[0].src != undefined, "result.itemlist[0].src = " + result.itemlist[0].src);
            assert.isTrue(result.itemlist[0].url != undefined, "result.itemlist[0].url = " + result.itemlist[0].url);
        })
    })

    before(async () => {
        await clearUserData();
    })
});