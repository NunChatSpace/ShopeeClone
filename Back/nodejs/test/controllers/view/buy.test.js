const { assert } = require('chai')
const { after, before, describe, it } = require('mocha')

const {initItemList, getItemList, clearItemList, getPreviewList } = require('../../src/controllers/view/buy.controller')
const constant = require('../../src/assets/constant');

describe('Test buy.controller', () => {
    before(async () => {
        await clearItemList();
    })

    describe('init data', done = () => {
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

// describe('Test buy.controller', () => {
//     describe('getPreviewList', done = () => {
//         it('Should return static path of image id 1dae7aa4-25e8-4bb0-b498-f96c5027d6df', () => {
//             var id = '1dae7aa4-25e8-4bb0-b498-f96c5027d6df'
//             var result = getPreviewList(id)
//             assert.isTrue(result.length == 6, "result.length = " + result.length);
//             assert.isTrue(result[0].includes('http://localhost:8080/static/item/1dae7aa4-25e8-4bb0-b498-f96c5027d6df'), "result[0] = " + result[0]);
//             assert.isTrue(result[1].includes('http://localhost:8080/static/item/1dae7aa4-25e8-4bb0-b498-f96c5027d6df'), "result[1] = " + result[1]);
//             assert.isTrue(result[2].includes('http://localhost:8080/static/item/1dae7aa4-25e8-4bb0-b498-f96c5027d6df'), "result[2] = " + result[2]);
//             assert.isTrue(result[3].includes('http://localhost:8080/static/item/1dae7aa4-25e8-4bb0-b498-f96c5027d6df'), "result[3] = " + result[3]);
//             assert.isTrue(result[4].includes('http://localhost:8080/static/item/1dae7aa4-25e8-4bb0-b498-f96c5027d6df'), "result[4] = " + result[4]);
//             assert.isTrue(result[5].includes('http://localhost:8080/static/item/1dae7aa4-25e8-4bb0-b498-f96c5027d6df'), "result[5] = " + result[5]);
//             done();
//         })
//     })

//     describe('getPreviewList', done = () => {
//         it('Should return static path of image id 6b40a0b6-91bb-46d7-970b-d4ad0657ec52', () => {
//             var id = '6b40a0b6-91bb-46d7-970b-d4ad0657ec52'
//             var result = getPreviewList(id)
//             assert.isTrue(result.length == 1, "result.length = " + result.length);
//             assert.isTrue(result[0].includes('http://localhost:8080/static/item/6b40a0b6-91bb-46d7-970b-d4ad0657ec52'), "result[0] = " + result[0]);
//             done();
//         })
//     })
// })

describe('Test buy.controller', () => {
    before(async () => {
        await clearItemList();
        await initItemList();
    })

    describe('getItemList', done = () => {
        it('Should contains data', async () => {
            var filter = {
                "id": "1dae7aa4-25e8-4bb0-b498-f96c5027d6df"
            }
            var data = await getItemList(filter);
            console.log(data)
            assert.isTrue(data.id == '1dae7aa4-25e8-4bb0-b498-f96c5027d6df', "data.id = " + data.id);
            assert.isTrue(data.name == 'Nike Air Force 1', "data.name = " + data.name);
            assert.isTrue(data.tagsEnum.length == 2, "data.tagsEnum = " + data.tagsEnum);
            assert.isTrue(data.imgCount == 6, "data.imgCount = " + data.imgCount);
            assert.isTrue(data.price == 123, "data.price = " + data.price);
            assert.isTrue(data.soleCount == 10, "data.soleCount = " + data.soleCount);
            assert.isTrue(data.discount[0] == ["N/A"], "data.discount = " + data.discount);
            assert.isTrue(data.bundleDeal[0] == ["N/A"], "data.bundleDeal = " + data.bundleDeal);
            assert.isTrue(data.delivery[0] == ["N/A"], "data.delivery = " + data.delivery);
            assert.isTrue(data.color[0] == ["N/A"], "data.color = " + data.color);
            assert.isTrue(data.amount == 0, "data.amount = " + data.amount);
            assert.isTrue(data.previewList.length == 6, "data.previewList.length = " + data.previewList.length);
            done();
        })
    })

    after(async () => {
        await clearItemList();
    })
})