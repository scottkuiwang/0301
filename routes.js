/**
 * Created by apple on 2017/3/1.
 */
module.exports=function(app){

    app.use('/',require('./routes/index.js'));
    app.use('/procedure',require('./routes/procedure.routes.js'));
    app.use('/product',require('./routes/product.routes.js'));
    app.use('/id',require('./routes/id.routes.js'));
    app.use('/user',require('./routes/users.js'));
};