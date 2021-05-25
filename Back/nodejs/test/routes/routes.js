const { assert } = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const {after, before, describe, it} = require('mocha')

const server = require('../../src/server')

chai.use(chaiHttp)
chai.should()

describe('Test Routing with normal flow', () => {
    before(done => {
        // Do something here before test
        done()
    })

    describe('GET /api/init', () => {
        it('it should have message "Success"', done => {
            chai
            .request(server)
            .get('/api/init')
            .end((req, res) => {
                res.should.have.status(200)
                res.body.should.have.property('status').eql('Success')
                done()
            })
        })
    })

    describe('GET /api/getrecommendmenu', () => {
        it('it should have message "Success"', done => {
            chai
            .request(server)
            .get('/api/getrecommendmenu')
            .end((req, res) => {
                res.should.have.status(200)
                res.body.should.have.property('status').eql('Success')
                res.body.should.have.property('count')
                done()
            })
        })
    })

    after(done => {
        // Do something here after test
        done()
    })
})