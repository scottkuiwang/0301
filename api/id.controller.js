/**
 * Created by apple on 2017/3/8.
 */
var ids = require('./../models/schema/tb_ids.js');

//获取Id的最大值
exports.getMaxId=function(req,res){
    var type=req.query.type;
    ids.findOne({'type':type},function(err,data){
        if(err){console.log(err);}
        var id;
        if(data==null){
            id=1;
        }else{
            id=parseInt(data.value)+1;
        }
        saveMaxId(type,id,function(result){
            return res.jsonp(200, {'Id':id});
        });
    }).sort({'value':-1});
};
//保存最大值
function saveMaxId(type,Id,callback){
    var postdata={
        type:type,
        value:Id
    }
    ids.create(postdata,function(err,data){
        if(err){console.log(err);}
        callback();
    })
};
//获取Id
exports.getId=function(type,callback){
    ids.findOne({'type':type},function(err,data){
        if(err){console.log(err);}
        var id;
        if(data==null){
            id=1;
        }else{
            id=parseInt(data.value)+1;
        }
        saveMaxId(type,id,function(result){
            callback(id);
        });
    }).sort({'value':-1});
};