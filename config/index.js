/**
 * Created by apple on 2017/3/7.
 */
'use strict';

var path = require('path');
var _ = require('lodash');

var all = {
    env: process.env.NODE_ENV,
    root: path.normalize(__dirname + '/../..'),
    //userRoles: ['guest', 'user', 'admin'],
    mongo: {
        //uri: 'mongodb://139.196.111.194:37017/KEP',
        //uri: 'mongodb://localhost/kep'
        uri: 'mongodb://localhost/wx'
        //uri: 'mongodb://139.196.111.194:37017/keptest',
        //uri:'mongodb://bigpixel-east.chinacloudapp.cn:27201/bigpixel-test,bigpixel-east.chinacloudapp.cn:27202/bigpixel-test,bigpixel-north.chinacloudapp.cn:27101/bigpixel-test,bigpixel-north.chinacloudapp.cn:27102/bigpixel-test/?replicaSet=jingkun',
        //options: {
        //    user: 'bigpixel',
        //    pass: 'bigpixel@725'
        //}
        //options: {
        //    user: 'kep',
        //    pass: 'kylbizadmin123'
        //}
    }
    //,
    //azure:{
    //    adal:{
    //        tenant:'',
    //        audience:['e23507d7-b8fc-40df-a3a5-eb12a19ba9e8','7d21c0f1-78b8-4078-a8cc-89726b228e4d'],
    //        appid:'e23507d7-b8fc-40df-a3a5-eb12a19ba9e8',
    //        token_endpoint:'isvalidated',
    //        auth_endpoint:'',
    //        signing_cert:''
    //    }
    //},
    //weixin:{
    //    appid:"wx26fe4ccc982d1e1b",
    //    secret:"6d8ac447fd198ddeef5268d6c7976697",
    //    expireTime:7000
    //}
};

// 根据运行环境(开发、生产)的不同生成相应的配置文件
// ==============================================
module.exports = all;