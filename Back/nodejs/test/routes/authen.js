const chai = require('chai')
const chaiHttp = require('chai-http')
const { after, before, describe, it } = require('mocha')
const { initUserData, clearUserData } = require('../../src/controllers/view/user.controller');
const server = require('../../src/serverTest')

chai.use(chaiHttp)
chai.should()

describe('Test authen', () => {
    before(async() => {
        await clearUserData()
        await initUserData()
    })

    describe('POST /authen/login', () => {
        it('it should have attributes', done => {
            chai
                .request(server)
                .post('/authen/login')
                .send({username: "nunz9684", password: "123456789"})
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

    describe('POST /authen/login', () => {
        it('it should return 401', done => {
            chai
                .request(server)
                .post('/authen/login')
                .send({username: "ItsAlwaysfailed", password: "ItsAlwaysfailed"})
                .end((req, res) => {
                    res.should.have.status(401)
                    res.body.should.have.property('message')
                    done()
                })
        })
    })

    describe('POST /authen/register', () => {
        it('it should have message "Success"', done => {
            chai
                .request(server)
                .post('/authen/register')
                .send({username: "ItsAlwaysSuccess", password: "ItsAlwaysSuccess"})
                .end((req, res) => {
                    res.should.have.status(201)
                    res.body.should.have.property('message').eql('Create user success')
                    done()
                })
        })
    })

    describe('POST /authen/register', () => {
        it('it should return 401', done => {
            chai
                .request(server)
                .post('/authen/register')
                .send({username: "nunz9684", password: "123456789"})
                .end((req, res) => {
                    res.should.have.status(401)
                    res.body.should.have.property('message').eql('User already exist')
                    done()
                })
        })
    })

    after(async() =>{
        await clearUserData()
    })
})