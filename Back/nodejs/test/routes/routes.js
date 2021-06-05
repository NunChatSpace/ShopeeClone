const { expect, assert } = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const {after, before, describe, it} = require('mocha')

const server = require('../../src/serverTest')

chai.use(chaiHttp)
chai.should()

describe('Test Routing with normal flow', () => {
    before(done => {
        // Do something here before test
        done()
    })

    describe('GET /api/view/init', () => {
        it('it should have message "Success"', done => {
            chai
            .request(server)
            .get('/api/view/init')
            .end((req, res) => {
                res.should.have.status(200)
                res.body.should.have.property('status').eql('Success')
                done()
            })
        })
    })

    describe('GET /api/view/category', () => {
        it('it should have message "Success"', done => {
            chai
            .request(server)
            .get('/api/view/category')
            .end((req, res) => {
                res.should.have.status(200)
                res.body.should.have.property('status').eql('Success')
                res.body.should.have.property('count')
                done()
            })
        })
    })

    describe('GET /api/view/recommend', () => {
        it('it should have message "Success"', done => {
            chai
            .request(server)
            .get('/api/view/recommend')
            .end((req, res) => {
                res.should.have.status(200)
                res.body.should.have.property('status').eql('Success')
                res.body.should.have.property('count')
                done()
            })
        })
    })

    describe('GET /api/view/advertisement', () => {
        it('it should have message "Success"', done => {
            chai
            .request(server)
            .get('/api/view/advertisement')
            .end((req, res) => {
                res.should.have.status(200)
                res.body.should.have.property('status').eql('Success')
                res.body.should.have.property('count')
                done()
            })
        })
    })

    describe('GET /api/view/itemlist', ()=> {
        it('it should have message "Success" and Property is not undefined', done => {
            chai
            .request(server)
            .get('/api/view/itemlist')
            .end((req, res) => {
                res.should.have.status(200)
                res.body.should.have.property('status').eql('Success')
                res.body.should.have.property('count')
                assert.isTrue(res.body.data != undefined, "res.body.data != " + res.body.data);
                assert.isTrue(res.body.data[0].id != undefined, "res.body.data.id = " + res.body.data[0].id );
                assert.isTrue(res.body.data[0].name != undefined, "res.body.data.name = " + res.body.data[0].name );
                assert.isTrue(res.body.data[0].tagsEnum != undefined, "res.body.data.tagsEnum = " + res.body.data[0].tagsEnum );
                assert.isTrue(res.body.data[0].imgCount != undefined, "res.body.data.imgCount = " + res.body.data[0].imgCount );
                assert.isTrue(res.body.data[0].discount != undefined, "res.body.data.discount = " + res.body.data[0].discount );
                assert.isTrue(res.body.data[0].bundleDeal != undefined, "res.body.data.bundleDeal = " + res.body.data[0].bundleDeal );
                assert.isTrue(res.body.data[0].delivery != undefined, "res.body.data.delivery = " + res.body.data[0].delivery );
                assert.isTrue(res.body.data[0].color != undefined, "res.body.data.color = " + res.body.data[0].color );
                assert.isTrue(res.body.data[0].amount != undefined, "res.body.data.amount = " + res.body.data[0].amount );
                done()
            })
        })
    })

    describe('GET /api/view/buy', ()=> {
        it('it should have message "Success" and Property is not undefined', done => {
            chai
            .request(server)
            .get('/api/view/buy')
            .send({id: "1dae7aa4-25e8-4bb0-b498-f96c5027d6df"})
            .end((req, res) => {
                res.should.have.status(200)
                res.body.should.have.property('status').eql('Success')
                assert.isTrue(res.body.data != undefined, "res.body.data != " + res.body.data);
                assert.isTrue(res.body.data.id != undefined, "res.body.data.id = " + res.body.data.id );
                assert.isTrue(res.body.data.name != undefined, "res.body.data.name = " + res.body.data.name );
                assert.isTrue(res.body.data.tagsEnum != undefined, "res.body.data.tagsEnum = " + res.body.data.tagsEnum );
                assert.isTrue(res.body.data.imgCount != undefined, "res.body.data.imgCount = " + res.body.data.imgCount );
                assert.isTrue(res.body.data.discount != undefined, "res.body.data.discount = " + res.body.data.discount );
                assert.isTrue(res.body.data.bundleDeal != undefined, "res.body.data.bundleDeal = " + res.body.data.bundleDeal );
                assert.isTrue(res.body.data.delivery != undefined, "res.body.data.delivery = " + res.body.data.delivery );
                assert.isTrue(res.body.data.color != undefined, "res.body.data.color = " + res.body.data.color );
                assert.isTrue(res.body.data.amount != undefined, "res.body.data.amount = " + res.body.data.amount );
                assert.isTrue(res.body.data.previewList != undefined, "res.body.data.previewList = " + res.body.data.previewList );
                done()
            })
        })
    })

    after(done => {
        // Do something here after test
        done()
    })
})