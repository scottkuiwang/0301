/**
 * Created by apple on 2017/3/14.
 */
//初始化session等测试数据
exports.inifrm=function(req,res){
    req.session.userinfo={
        'AgentId':'0',
        'userid':'0'
    };
    return res.jsonp(200,{'data':'ok'});
};