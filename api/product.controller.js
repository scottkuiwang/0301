/**
 * Created by apple on 2017/3/12.
 */
var product=require('./../models/schema/tb_products.js');
var async=require('async');

//生成产品
//设置产品和工艺间的关系
exports.createProduct=function(req,res){
    ////获取product中的数据
    //var productData=JSON.parse(req.body.product);
    ////获取product_procedure的相关数据
    //var pdData=JSON.parse(req.body.pdData);
    ////生成产品ID
    //var id=require('../api/id.controller.js');
    //try{
    //    id.getId('PC',function(Id){
    //        var pcData={
    //            Id:Id,
    //            ProductName:productData.ProductName,
    //            Price:productData.Price,
    //            MinPrice:productData.MinPrice,
    //            MaxPrice:productData.MaxPrice,
    //            DwId:productData.DwId,
    //            IsChanged:productData.IsChanged,
    //            Stat:1,
    //            IsReg:productData.IsReg,
    //            IsBank:productData.IsBank,
    //            IsCommon:productData.IsCommon,
    //            IsUrgent:productData.IsUrgent
    //        };
    //        product.create(pcData,function(err,data){
    //            if(err){console.log(err);}
    //            async.forEachSeries(pdData,function(item,callback){
    //                var postdata={
    //                    AgentId:productData.AgentId,
    //                    OrderId:item.OrderId,
    //                    CPId:Id,
    //                    PDId:item.PDId
    //                };
    //                product_procedure.create(postdata,function(err,result){
    //                    if(err){console.log(err);}
    //                    callback();
    //                });
    //            },function(err){
    //                return res.jsonp(201,{'msg':'ok'});
    //            });
    //        });
    //    });
    //}catch(e){
    //    console.log(e);
    //}
};

//修改产品
//修改产品工艺设置
exports.updateProduct=function(req,res){

};

//删除产品
//设置产品状态为删除
exports.removeProduct=function(req,res){

};

//获取产品列表

exports.list=function(req,res){
    try{
        if(req.session.userinfo==undefined){
            return res.json(200,{'msg':'no',data:{}});
        }
        else{
            var AgentId=req.session.userinfo.AgentId;
            var where={
                'AgentId':parseInt(AgentId),'Stat':0
            };
            product.find(where,function(err,data){
                if(err){console.log(err);}
                return res.json(200,{'msg':'YES',data:data});
            });
        }
    }catch (e){
        console.log(e);
    }
};


