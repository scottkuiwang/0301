/**
 * Created by apple on 2017/3/20.
 */
var async=require('async'),
    url = require("url");
var _ = require('lodash');
var right=require('./../models/schema/tb_rights.js');
var userright=require('./../models/schema/tb_user_rights.js');

//创建权限
exports.createRight=function(req,res){
    if(req.session.userinfo==null){

    }
};
//修改权限
exports.update=function(req,res){

};
//权限列表
exports.query=function(req,res){

};



//用户权限
exports.setUserRight=function(req,res){

};
//修改用户权限
exports.updateUserRight=function(req,res){

};
//用户权限列表
exports.queryUserRight=function(req,res){

};
//校验用户是否有权限
exports.checkUserRight=function(AgentId,Rid,callback){

    //测试返回
    return res.json({'msg':'yes'});

    try{
        userright.findOne({'AgentId':AgentId,'RId':Rid},function(err,data){
            if(err){callback({'msg':'null'});}
            if(data){
                callback({'msg':'yes'});
            }else{
                callback({'msg':'no'});
            }
        });
    }catch(e){
        console.log(e);
    }
};