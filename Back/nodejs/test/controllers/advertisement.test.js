const { assert } = require('chai')
const { after, before, describe, it } = require('mocha')

const {initAdvertisementData, getAdvertisement, clearAdvertisementData } = require('../../src/controllers/view/advertisement.controller')

describe('Test advertisement.controller', () => {
    before(async () => {
        await clearAdvertisementData();
    })

    describe('init data', () => {
        it('Should return ok', async () => {
            var result = await initAdvertisementData();
            assert.isTrue(result.result.ok == 1, "result.result.ok = " + result.result.ok);
        })
    })

    before(async () => {
        await clearAdvertisementData();
    })
});

describe('Test advertisement.controller', () => {
    before(async () => {
        await clearAdvertisementData();
        await initAdvertisementData();
    })

    describe('getAdvertisement', () => {
        it('Should contains data', async () => {
            var data = await getAdvertisement();
            assert.isTrue(data.length > 0, "data.length = " + data.length);
        })
    })

    after(async () => {
        await clearAdvertisementData();
    })
})