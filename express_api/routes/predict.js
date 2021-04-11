var express = require("express");
var router = express.Router();
var request = require('request');
const axios = require('axios');
var http = require('http');
var fs = require('fs');
const fetch = require("node-fetch");
var FormData = require('form-data');
// const product_schema = require("../models/products")

/* GET user page. */
router.get("/", async function (req, res, next) {
    console.log("checking")

    // fetch('https://veggie-predictor.herokuapp.com/test', 
    //     {
    //         method: 'post',
    //         headers: { "enctype": "multipart/form-data" },
    //         data: { "file": fs.open('C:/Users/sanya/Desktop/TrojanHacks/FarmersMarket/express_api/tomatoes3.jpg') },
            
    // }).then(json => console.log(json))
    

//     axios.post('https://veggie-predictor.herokuapp.com/test', function (err, f) {
//    if (err) {
//       return console.log(err);
//         }
//    else {
//        return console.log('success');
//         }
// }).then(
//             data => {
//                 console.log(data)
//                 res.send(data);
//             }
//         ).catch(err => console.error(err))
    
  
//           res.send(json);
    
    // fileopen = fs.open('C:/Users/sanya/Desktop/TrojanHacks/FarmersMarket/express_api/tomatoes3.jpg')

    
const filePath = 'C:/Users/sanya/Desktop/TrojanHacks/FarmersMarket/express_api/tomatoes3.jpg';
    const imageData = fs.readFileSync(filePath);

    const form = new FormData();
    form.append('file', imageData, {
        filepath: filePath,
        contentType: 'multipart/form-data',
    });
    // const json = JSON.stringify({ a : 42 });
    const options = {
        headers: {'content-type': 'multipart/form-data'}
        };
    const result = await axios.post('https://veggie-predictor.herokuapp.com/predict', imageData, options);

    // result.data.headers['content-type']; // 'application/x-www-form-urlencoded',
    console.log(result);

    
    });
    

module.exports = router;
