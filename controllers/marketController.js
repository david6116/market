const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
require('dotenv').config()

//Base API URL:
let baseURL = 'https://cloud.iexapis.com/stable'
let key = process.env.IEXAPI

router.get('/', (req, res) =>{
    fetch(baseURL + `/stock/aapl/quote?token=${key}`)
        .then(response => response.json())
        .then(data => {
            for(const item in data){
                console.log(item)
                console.log(data[item])
            }
            res.render('stocks/index.ejs',
                {
                    stock: data
                })
        })
})

module.exports = router;