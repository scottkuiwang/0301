/**
 * Created by apple on 2017/3/16.
 */
var async=require('async'),
    url = require("url");
var _ = require('lodash');
var users=require('./../models/schema/tb_users.js');
var user_tasks=require('./../models/schema/tb_user_tasks.js');
//用户列表
exports.list=function(req,res){
    try{
        if(req.session.userinfo==undefined){
            return res.json(200,{'msg':'no',data:{}});
        }
        else{
            var agentid=req.session.userinfo.AgentId;
            var where={
                agentid:parseInt(agentid),
                stat:0
            };
            users.find(where,function(err,data){
                if(err){console.log(err);}
                return res.json(200,{'msg':'YES',data:data});
            });
        }
    }catch (e){
        console.log(e);
    }
};

//用户任务列表
exports.tasks=function(req,res){
    try{
        if(req.session.userinfo==undefined){
            return res.json(200,{'msg':'no',data:{}});
        }
        else{
            var agentid=req.session.userinfo.AgentId;
            var where={
                AgentId:parseInt(agentid),
                Stat:0
            };
            var usertasklist=[];
            user_tasks.find(where,function(err,data){
                if(err){console.log(err);}
                async.forEachSeries(data,function(item,cb){
                    getUserInfo(agentid,item.UserId,function(userinfo){
                        var temp={
                            Uid:item.UserId,
                            Uname:userinfo.name,
                            Task_wjh:item.Task_wjh,
                            Task_wzx:item.Task_wzx,
                            Task_zxz:item.Task_zxz,
                            Task_yjs:item.Task_yjs
                        };
                        usertasklist.push(temp);
                        cb();
                    });
                },function(err){
                    return res.json(200,{'msg':'YES',data:usertasklist});
                });
            });
        }
    }catch (e){
        console.log(e);
    }
};

//获取用户信息
var getUserInfo=function(agentid,uid,callback){
    var where={
        agentid:agentid,
        uid:uid
    };
    users.findOne(where,function(err,data){
        if(err){console.log(err);}
        callback(data);
    });
};
