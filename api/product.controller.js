/**
 * Created by apple on 2017/3/12.
 */
var product=require('./../models/schema/tb_products.js');
var async=require('async'),
    url = require("url");
var _ = require('lodash');

//生成产品并保持产品工艺流程
exports.create=function(req,res){
    try{
        if(req.session.userinfo==undefined){
            return res.json(200,{'msg':'no',data:{}});
        }
        else{
            var AgentId=req.session.userinfo.AgentId;
            //获取product中的数据
            var productData=JSON.parse(req.body.product);
            //获取product_procedure的相关数据
            var pdData=JSON.parse(req.body.pdData);
            //生成产品ID
            var id=require('../api/id.controller.js');
            try{
                id.getId('PC',function(Id){
                    var pcData={
                        Id:Id,
                        AgentId:AgentId,
                        Type:productData.Type,
                        ProductName:productData.ProductName,
                        Price:productData.Price,
                        MinPrice:productData.MinPrice,
                        MaxPrice:productData.MaxPrice,
                        DwId:productData.DwId,
                        IsChanged:productData.IsChanged,
                        Stat:1,
                        IsReg:productData.IsReg,
                        IsBank:productData.IsBank,
                        IsCommon:productData.IsCommon,
                        IsFinance:productData.IsFinance,
                        Months:productData.Months,
                        IsUrgent:productData.IsUrgent
                    };
                    product.create(pcData,function(err,data){
                        if(err){console.log(err);}
                        async.forEachSeries(pdData,function(item,callback){
                            var postdata={
                                AgentId:productData.AgentId,
                                OrderId:item.OrderId,
                                CPId:Id,
                                PDId:item.PDId
                            };
                            product_procedure.create(postdata,function(err,result){
                                if(err){console.log(err);}
                                callback();
                            });
                        },function(err){
                            return res.jsonp(201,{'msg':'ok'});
                        });
                    });
                });
            }catch(e){
                console.log(e);
            }
        }
    }catch (e){
        console.log(e);
    }
};


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

//查询产品列表
exports.query=function(req,res){
    try{
        if(req.session.userinfo) {
            var args=url.parse(req.url,true).query;
            var limit=args.count;
            var skip=args.currentpage;
            var where = {'AgentId':parseInt(req.session.userinfo.AgentId)};

            if(args.ProductName&& args.ProductName != "") {
                var qs=new RegExp(args.ProductName);
                _.assign(where,{"ProductName":qs});
            }
            //是否工商注册
            if(args.IsReg && args.IsReg != "") {
                _.assign(where,{"IsReg":parseInt(args.IsReg)});
            }
            //是否银行开户
            if(args.IsBank && args.IsBank != "") {
                _.assign(where,{"IsBank":parseInt(args.IsBank)});
            }
            //是否普通业务
            if(args.IsCommon && args.IsCommon != "") {
                _.assign(where,{"IsCommon":parseInt(args.IsCommon)});
            }
            //是否银行代理
            if(args.IsFinance && args.IsFinance != "") {
                _.assign(where,{"IsFinance":parseInt(args.IsFinance)});
            }
            if(args.Type && args.Type != "") {
                _.assign(where,{"Type":parseInt(args.Type)});
            }
            if(args.Stat && args.Stat != "") {
                _.assign(where,{"Stat":parseInt(args.Stat)});
            }
            if(limit==0){
                product.count(where,function(err,countdata){
                    if(err) { console.log(err);}
                    product.find(where,function(err,data){
                        if(err) { console.log(err);}
                        var result={
                            'count':countdata,
                            'data':data
                        };
                        return res.jsonp(200, {'msg':'yes','result':result});
                    });
                });
            }else{
                product.count(where,function(err,countdata){
                    if(err) { console.log(err);}
                    product.find(where,function(err,data){
                        if(err) { console.log(err);}
                        var result={
                            'count':countdata,
                            'data':data
                        };
                        return res.jsonp(200, {'msg':'yes','result':result});
                    }).sort({'Id':-1}).limit(parseInt(limit)).skip(parseInt(skip)*parseInt(limit));
                });
            }

        }else{
            return res.jsonp(200,{'msg':'no'});
        }
    }catch(e){
        console.log(e);
    }
};


