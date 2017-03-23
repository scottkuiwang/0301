/**
 * Created by apple on 2017/3/17.
 */
var customer=require('./../models/schema/tb_customers.js');
var async=require('async'),
    url = require("url");
var _ = require('lodash');

exports.query=function(req,res){
    try{
        if(req.session.userinfo) {
            var args=url.parse(req.url,true).query;
            var limit=args.count;
            var skip=args.currentpage;
            var where = {'AgentId':req.session.userinfo.AgentId};

            if(args.LinkName&& args.LinkName != "") {
                var qs=new RegExp(args.LinkName);
                _.assign(where,{"LinkName":qs});
            }
            if(args.Mobile&& args.Mobile != "") {
                var qs=new RegExp(args.Mobile);
                _.assign(where,{"Mobile":qs});
            }
            if(args.QQ&& args.QQ != "") {
                var qs=new RegExp(args.QQ);
                _.assign(where,{"QQ":qs});
            }
            if(args.Wechat&& args.Wechat != "") {
                var qs=new RegExp(args.Wechat);
                _.assign(where,{"Wechat":qs});
            }
            if(args.BkInfo&& args.BkInfo != "") {
                var qs=new RegExp(args.BkInfo);
                _.assign(where,{"BkInfo":qs});
            }
            if(args.stat && args.stat != "") {
                _.assign(where,{"Stat":parseInt(args.stat)});
            }
            if(limit==0){
                customer.count(where,function(err,countdata){
                    if(err) { console.log(err);}
                    customer.find(where,function(err,data){
                        if(err) { console.log(err);}
                        var result={
                            'count':countdata,
                            'data':data
                        };
                        return res.jsonp(200, {'msg':'yes','result':result});
                    });
                });
            }else{
                customer.count(where,function(err,countdata){
                    if(err) { console.log(err);}
                    customer.find(where,function(err,data){
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

