
const express = require('express')
const mongoose = require('mongoose')

const app = require('./app')
const PORT = process.env.PORT || 8080

mongoose.connect('mongodb://localhost:27017/shopeecloneTest',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
})

module.exports = app