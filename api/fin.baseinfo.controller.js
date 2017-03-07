/**
 * Created by apple on 2017/3/6.
 */
var finaccountitem=require('./../medels/schema/fin_account_items.js');

//添加记账科目数据
exports.createFinItemInfo=function(req,res){
    var itemId=req.body.itemId;
    var typeId=req.body.typeId;
    var itemName=req.body.itemName;
    var stat=req.body.stat;
    var postdata={
        itemId:itemId,
        typeId:typeId,
        itemName:itemName,
        stat:stat
    };
    try{
        finaccountitem.create(postdata,function(err,data){
            if(err){console.log(err);}
            return res.jsonp(201,{'msg':'YES','data':data});
        });
    }catch(e){
        return res.jsonp(200,{'msg':'NO'});
    }
};

//读取记账科目单条记录
exports.getFinItemInfoById=function(req,res){
    var id=req.params.id;
    var where={
      itemId:id
    };
    try{
        finaccountitem.findOne(where,function(err,data){
            if(err){console.log(err);}
            return res.jsonp(200,{'msg':'YES','data':data});
        });
    }
    catch(e){
        return res.jsonp(200,{'msg':'NO'});
    }
};

//读取记账科目列表
exports.getFinItemInfoList=function(req,res){
    try{
        finaccountitem({},function(err,data){
            if(err){console.log(err);}
            return res.jsonp(200,{'msg':'YES','data':data});
        });
    }
    catch(e){
        return res.jsonp(200,{'msg':'NO'});
    }
};













