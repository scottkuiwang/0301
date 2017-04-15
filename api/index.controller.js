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



//test
exports.test=function(req,res){
    var data=[];
    var temp= {
        'appid':'001',
        'plan': '联信宝',
        'func': '支付',
        'url': '/zhifu',
        'token': '22333334434535'
    };
    data.push(temp);
    var temp= {
        'appid':'002',
        'plan': '联信宝',
        'func': '账户',
        'url': '/zhanghu',
        'token': '24444234434535'
    };
    data.push(temp);
    var temp= {
        'appid':'003',
        'plan': '联信宝',
        'func': '报表',
        'url': '/baobiao',
        'token': 'Q24444234434535'
    };
    data.push(temp);
    return res.jsonp(200,{'id':req.params.id,'data':data});
}