var express = require('express');
var router = express.Router();

var request = require('request')


router.get('/', function(req, res, next) {
    request('http://hongyan.cqupt.edu.cn/XZBBM/index.php/api/search/tag/', function (err, response, body) {
        if (err) {
            console.log(err)
        }
        else {
            let data = JSON.parse(body)
            let len = Math.floor(data.length / 11) + 1
            res.render('activity', {data: data, len: len});
        }
    })
    
});

module.exports = router;
