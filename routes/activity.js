var express = require('express');
var router = express.Router();

var request = require('request')

let data_all, data_study, data_life, data_activity, data_organ, data_others
let len_all, len_study, len_life, len_activity, len_organ, len_others
let all, study, life, activity, organ, others
router.get('/', function(req, res, next) {
    request('http://hongyan.cqupt.edu.cn/XZBBM/index.php/api/search/tag/', function (err, response, body) {
        if (err) {
            console.log(err)
        }
        else {
            data_all = JSON.parse(body)
            len_all = Math.floor(data_all.length / 11) + 1
            all = {
                data_all,
                len_all
            }
            request('http://hongyan.cqupt.edu.cn/XZBBM/index.php/api/search/tag/%E5%AD%A6%E4%B9%A0', function (err, response,body) {
                if (err) {
                    console.log(err)
                }
                data_study = JSON.parse(body)
                len_study = Math.floor(data_study.length / 11) + 1
                study = {
                    data_study,
                    len_study
                }
                request('http://hongyan.cqupt.edu.cn/XZBBM/index.php/api/search/tag/%E7%94%9F%E6%B4%BB', function (err, response,body) {
                    if (err) {
                        console.log(err)
                    }
                    data_life = JSON.parse(body)
                    len_life = Math.floor(data_life.length / 11) + 1
                    life = {
                        data_life,
                        len_life
                    }
                    request('http://hongyan.cqupt.edu.cn/XZBBM/index.php/api/search/tag/%E6%B4%BB%E5%8A%A8', function (err, response,body) {
                        if (err) {
                            console.log(err)
                        }
                        data_activity = JSON.parse(body)
                        len_activity = Math.floor(data_activity.length / 11) + 1
                        activity = {
                            data_activity,
                            len_activity
                        }
                        request('http://hongyan.cqupt.edu.cn/XZBBM/index.php/api/search/tag/%E7%BB%84%E7%BB%87', function (err, response,body) {
                            if (err) {
                                console.log(err)
                            }
                            data_organ = JSON.parse(body)
                            len_organ = Math.floor(data_organ.length / 11) + 1
                            organ = {
                                data_organ,
                                len_organ
                            }
                            request('http://hongyan.cqupt.edu.cn/XZBBM/index.php/api/search/tag/%E5%85%B6%E4%BB%96', function (err, response,body) {
                                if (err) {
                                    console.log(err)
                                }
                                data_others = JSON.parse(body)
                                len_others = Math.floor(data_others.length / 11) + 1
                                others = {
                                    data_others,
                                    len_others
                                }
                                res.render('activity', {all, study, life, activity, organ, others});
                            })
                        })
                    })
                })
            })
        }
    })
    
});

module.exports = router;
