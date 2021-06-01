const { expect } = require('chai')
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

    describe('GET /api/view/getItemList', ()=> {
        it('it should have message "Success"', done => {
            chai
            .request(server)
            .get('/api/view/getItemList')
            .end((req, res) => {
                res.should.have.status(200)
                res.body.should.have.property('status').eql('Success')
                res.body.should.have.property('itemlist').property('src')
                res.body.should.have.property('itemlist').property('url')
                done()
            })
        })
    })

    after(done => {
        // Do something here after test
        done()
    })
})