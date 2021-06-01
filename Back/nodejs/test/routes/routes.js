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
                console.log(res.body.data)
                assert.isTrue(res.body.data != undefined, "res.body.data != " + res.body.data);
                assert.isTrue(res.body.data[0].id != undefined, "res.body.data.id = " + res.body.data[0].id );
                assert.isTrue(res.body.data[0].name != undefined, "res.body.data.id = " + res.body.data[0].name );
                assert.isTrue(res.body.data[0].src != undefined, "res.body.data.id = " + res.body.data[0].src );
                assert.isTrue(res.body.data[0].tagsEnum != undefined, "res.body.data.id = " + res.body.data[0].tagsEnum );
                assert.isTrue(res.body.data[0].imgCount != undefined, "res.body.data.id = " + res.body.data[0].imgCount );
                assert.isTrue(res.body.data[0].url != undefined, "res.body.data.id = " + res.body.data[0].url );
                done()
            })
        })
    })

    after(done => {
        // Do something here after test
        done()
    })
})