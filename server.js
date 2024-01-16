require('dotenv').config()
const express = require('express')
const app = process.env.PORT
app.get('/', (req, res) => {
    res.send(`Running my first express server on port ${port}`)
})
app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
    console.log(`Running my first express server on port ${port}`);
})