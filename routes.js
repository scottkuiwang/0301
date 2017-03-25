/**
 * Created by apple on 2017/3/1.
 */
module.exports=function(app){

    app.use('/',require('./routes/index.js'));
    app.use('/procedure',require('./routes/procedure.routes.js'));
    app.use('/product',require('./routes/product.routes.js'));
    app.use('/id',require('./routes/id.routes.js'));
    app.use('/user',require('./routes/users.js'));
    app.use('/customer',require('./routes/customer.routes.js'));
    app.use('/type',require('./routes/type.routes.js'));
    app.use('/tec',require('./routes/tec.routes.js'));
    app.use('/service',require('./routes/service.routes.js'));
};