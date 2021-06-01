const express = require('express');
const cors = require('cors');
const router = require('../src/routes/routes');
const authenRouter = require('../src/routes/authen');
const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    methods: [
        'GET',
        'POST',
        'HEAD',
        'PUT',
        'DELETE',
        'PATCH'
    ],
    allowedHeaders: [
        'Origin',
        'Content-Type',
        'Accept',
        'Content-Length',
        'Authorization',
        'access-control-allow-origin',
        'access-control-allow-headers',
        'access-control-allow-methods'
    ]
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/static', express.static( __dirname + '/assets/static'));
app.use('/api/view', router);
app.use('/authen', authenRouter);

module.exports = app;