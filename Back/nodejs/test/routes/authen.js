const chai = require('chai')
const chaiHttp = require('chai-http')
const {after, before, describe, it} = require('mocha')

const server = require('../../src/server')

chai.use(chaiHttp)
chai.should()

describe('Test authen', () => {
    before(done => {
        // Do something here before test
        done()
    })

    describe('GET /authen/login', () => {
        it('it should have attributes', done => {
            chai
            .request(server)
            .get('/authen/login')
            .end((req, res) => {
                res.should.have.status(200)
                res.body.should.have.property('status')
                res.body.should.have.property('token')
                res.body.should.have.property('expiresIn')
                res.body.should.have.property('username')
                done()
            })
        })
    })

    describe('GET /authen/register', () => {
        it('it should have message "Success"', done => {
            chai
            .request(server)
            .get('/authen/register')
            .end((req, res) => {
                res.should.have.status(201)
                res.body.should.have.property('message').eql('Create user success.')
                res.body.should.have.property('message')
                done()
            })
        })
    })

    after(done => {
        // Do something here after test
        done()
    })
})