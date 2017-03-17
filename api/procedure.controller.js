/**
 * Created by apple on 2017/3/8.
 */
var procedure=require('./../models/schema/tb_procedures.js');

//校验过程是否存在
//含修改数据前验证数据
exports.checkProcedure=function(req,res){
    try{
        if(req.session.userinfo==undefined){
            return res.json(200,{'msg':'no',data:{}});
        }else{
            var AgentId=req.session.userinfo.AgentId;
            var ProcedureName=req.query.ProcedureName;
            var Stat=req.query.Stat;
            var Id='';
            if(req.query.Id!=undefined){
                Id=req.query.Id;
            }
            var where={
                AgentId:AgentId,
                ProcedureName:ProcedureName,
                Stat:0
            };
            try{
                procedure.findOne(where,function(err,data){
                    if(err){console.log(err);}
                    if(data==null){
                        return res.jsonp(200,{'msg':'YES'});
                    }else{
                        //新增状态
                        if(Id==''){
                            return res.jsonp(200,{'msg':'NO'});
                        }
                        //修改状态
                        if(Id!=''&&Id!=data.Id){
                            return res.jsonp(200,{'msg':'NO'});
                        }else{
                            return res.jsonp(200,{'msg':'YES'});
                        }
                    }
                });
            }catch(e){
                console.log(e);
            }
        }
    }catch (e){
        return res.json(200,{'msg':'no',data:{}});
    }
};

//设置过程
exports.createProcedure=function(req,res){
    var AgentId='0';
    if(req.session.userinfo){
        AgentId=req.session.userinfo.AgentId;
        var id=require('../api/id.controller.js');
        id.getId('pd',function(Id){
            var postdata={
                Id:Id,
                AgentId:AgentId,
                ProcedureName:req.body.ProcedureName,
                Stat:0,
                MoneyCost:req.body.MoneyCost,
                TimeCost:req.body.TimeCost
            };
            try{
                procedure.create(postdata,function(err,data){
                    if(err){console.log(err);}
                    return res.jsonp(201,{'msg':'YES','data':data});
                });
            }catch(e){
                console.log(e);
            }
        });
    }else{
        return res.jsonp(201,{'msg':'no'});
    }

};

//修改过程
exports.updateProcedure=function(req,res){
    if(req.session.userinfo) {
        var _id = req.params.Id;
        var AgentId = req.body.AgentId;
        var ProcedureName = req.body.ProcedureName;
        var MoneyCost = req.body.MoneyCost;
        var TimeCost = req.body.TimeCost;
        try {
            var postdata = {
                AgentId: AgentId,
                ProcedureName: ProcedureName,
                MoneyCost: MoneyCost,
                TimeCost: TimeCost
            };
            procedure.update({'_id': _id}, {$set: postdata}, function (err, result) {
                if (err) {
                    console.log(err);
                }
                return res.jsonp(201, result);
            });
        } catch (e) {
            console.log(e);
        }
    }else{
        return res.jsonp(201,{'msg':'no'});
    }
};

exports.listProcedure=function(req,res){
    if(req.session.userinfo) {
        var args=url.parse(req.url,true).query;
        var limit=args.count;
        var skip=args.currentpage;
        var where = {'AgentId':req.session.userinfo.AgentId};
        //模糊查询keywords中关键字
        if(args.ProcedureName&& args.ProcedureName != "") {
            var qs=new RegExp(args.ProcedureName);
            _.assign(where,{"ProcedureName":qs});
        }
        if(args.stat && args.stat != "") {
            _.assign(where,{"stat":args.stat});
        }
        procedure.count(where,function(err,countdata){
            if(err) { console.log(err);}
            procedure.find(where,function(err,data){
                if(err) { console.log(err);}
                var result={
                    'count':countdata,
                    'data':data
                };
                return res.jsonp(200, {'msg':'yes','result':result});
            }).sort({'createdby':-1}).limit(parseInt(limit)).skip(parseInt(skip)*parseInt(limit));
        });
    }else{
        return res.jsonp(200,{'msg':'no'});
    }
};

exports.removeProcedure=function(req,res){
    var _id=req.params.Id;
    var postdata={
        Stat:req.body.Stat
    };
    procedure.update({'_id':_id},{$set:postdata},function(err,data){
        if(err){console.log(err);}
        return res.jsonp(201,data);
    });
};

//明细
exports.getProdureById=function(req,res){
    var Id=req.params.Id;
    var where={
        Id:Id
    };
    try{
        procedure.findOne(where,function(err,data){
            if(err){console.log(err);}
            return res.jsonp(200,data);
        });
    }catch(e){
        console.log(e);
    }
};




