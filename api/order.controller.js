/**
 * Created by apple on 2017/3/19.
 */
var orderm=require('./../models/schema/tb_order_ms.js');
var orderd=require('./../models/schema/tb_order_ds.js');
var taskms=require('./../models/schema/tb_task_ms.js');
var async=require('async'),
    url = require("url");
var _ = require('lodash');

//生成订单
exports.create=function(req,res){
    try{
        if(req.session.userinfo==undefined){
            return res.json(201,{'msg':'no'});
        }else{
            var data_order_m=json.parse(req.body.orderm);
            var data_order_d=json.parse(req.body.orderd);
            var UserId=req.session.userinfo.userid;
            save_order_m(UserId,data_order_m,function(data){
                var Id=data.Oid;
                save_order_d(UserId,Id,data_order_d,function(data){
                    return res.json(201,{'msg':'yes'});
                });
            });
        }
    }catch(e){
        console.log(e);
    }
};
//保存订单主表
var save_order_m=function(UserId,data,callback){
    try{
        var id=require('../api/id.controller.js');
        id.getId('OM',function(Id){
            var postdata={
                AgentId:data.AgentId,
                Oid:Id,//订单编号
                UserId:UserId,
                createdby:data.createdby,//订单日期戳
                CusId:data.CusId,//客户编号
                LinkMan:data.LinkMan,//客户名称
                QQ:data.QQ,//QQ
                Wechat:data.Wechat,//微信号
                Ass:data.Ass,//收件地址
                Notes:data.Notes,//备注
                Stat:0,//状态
                Amt:data.Amt,//因收款
                Amt_payed:data.Amt_payed,//已收款
                Amt_unpayed:data.Amt_unpayed,//未收款
                Finishedby:0//完成日期戳
            };
            orderm.create(postdata,function(err,data){
                if(err){callback(null);}
                callback(data);
            });
        });
    }catch (e){
        console.log(e);
    }
};
//保存订单从表
var save_order_d=function(UserId,Oid,data,callback){
    try{
        async.forEachSeries(data,function(item,cb){
            var id=require('../api/id.controller.js');
            id.getId('OD',function(Id){
                var postdata={
                    AgentId:item.AgentId,
                    Oid:Oid,//订单编号
                    Did:Id,//订单明细编号
                    UserId:UserId,
                    createdby:item.createdby,//订单日期戳
                    Pid:item.Pid,//产品编号
                    ProductName:item.ProductName,//产品名称
                    Price:item.Price,//单价
                    Price_payed:item.Price_payed,//最终交易单价
                    Num:item.Num,//数量
                    Amt:item.Amt,//金额
                    Stat:item.Stat,//状态
                    Seted:item.Seted,//流程是否设置（0：表示不需要设置流程，1：未设置，2：已设置）
                    Finishedby:0//完成日期戳
                };
                orderd.create(postdata,function(err,data){
                    if(err){console.log(err);}
                    cb();
                });
            });
        },function(err){
            callback()
        });
    }catch (e){
        console.log(e);
    }
};

//从tb_task_ms中读取任务数据
exports.getTaskmInfos=function(req,res){
    try{
        if(req.session.userinfo==undefined){
            return res.json(200,{'msg':'no',data:{}});
        }else{
            var agentid=req.session.userinfo.AgentId;
            var where={
                AgentId:parseInt(agentid),
                PomId:parseInt(req.query.Oid)
            };
            taskms.find(where,function(err,data){
                if(err){console.log(err);}
                return res.jsonp(200,{'msg':'YES',data:data});
            }).sort({'PodId':1,'ProductId':1});
        }
    }catch(e){
        console.log(e);
    }
};