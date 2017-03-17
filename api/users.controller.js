/**
 * Created by apple on 2017/3/16.
 */
var users=require('./../models/schema/tb_users.js');
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