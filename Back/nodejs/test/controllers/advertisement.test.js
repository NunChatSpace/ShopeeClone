const { assert } = require('chai')
const { after, before, describe, it } = require('mocha')

const {initAdvertisementData, getAdvertisement, clearAdvertisementData } = require('../../src/controllers/advertisement.controller')

describe('Test advertisement.controller', () => {
    before(async () => {
        await clearAdvertisementData();
    })

    describe('init data', () => {
        it('Should contains 8 inserted data', done = async () => {
            var result = await initAdvertisementData();
            assert.isTrue(result.result.ok == 1, "result.result.ok = " + result.result.ok);
            assert.isTrue(result.result.n == 8, "result.result.n = " + result.result.n);
            done();
        })
    })

    before(async () => {
        await clearAdvertisementData();
    })
});

describe('Test categoryMenu.controller', () => {
    before(async () => {
        await clearAdvertisementData();
        await initAdvertisementData();
    })

    describe('getAdvertisement', () => {
        it('Should contains data', done = async () => {
            var data = await getAdvertisement();
            assert.isTrue(data.length > 0, "data.length = " + data.length);
            done();
        })
    })

    after(async () => {
        await clearAdvertisementData();
    })
})