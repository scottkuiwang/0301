/**
 * Created by apple on 2017/3/18.
 */
var type=require('./../models/schema/tb_types.js');
var async=require('async'),
    url = require("url");
var _ = require('lodash');

exports.query=function(req,res){
    try{
        if(req.session.userinfo) {
            type.find({},function(err,data){
                if(err){console.log(err);}
                return res.jsonp(200,{'msg':'yes','result':data});
            });
        }
        else{
            return res.jsonp(200,{'msg':'no'});
        }
    }  catch(e){
        console.log(e);
    }
};