/**
 * Created by apple on 2017/4/5.
 */
;(function($){
    var methods= {
        //创建底部
        _createFooterHtml : function (callback) {
        callback('<p class="am-padding-left">2017 &copy; MoleSite.top by <a href="http://www.molesite.top/" target="_blank">鼹鼠管理系统</a></p>');
    },
        //创建头
        _createHeaderHtml :function (callback) {
            var headHtml = '<div class="visible-xs hidden-sm hidden-md hidden-lg">' +
                '<div class="media logged-user">' +
                '<img alt="" src="../images/photos/user-avatar.png" class="media-object">' +
                '<div class="media-body">' +
                '<h4><a href="#"><span id="userName_left">jd</span></a></h4>' +
                '<span>"欢迎使用"</span>' +
                '</div>' +
                '</div>' +
                '<h5 class="left-nav-title">Account Information</h5>' +
                '<ul class="nav nav-pills nav-stacked custom-nav">' +
                '<li><a href="#"><i class="fa fa-user"></i> <span>Profile</span></a></li>' +
                '<li><a href="#"><i class="fa fa-cog"></i> <span>Settings</span></a></li>' +
                '<li><a href="#"><i class="fa fa-sign-out"></i> <span>Sign Out</span></a></li>' +
                '</ul>' +
                '</div>';
            callback(headHtml);
        },
        //创建左侧管理树
        _createLeftMenu :  function (callback) {
            var notes = '<ul class="am-list admin-sidebar-list"> <li><a href="admin-index.html"><span class="am-icon-home"></span> 首页</a></li>' +
                '<li><a href="#"><span class="am-icon-tasks"></span> 任务<span class="am-badge am-badge-secondary am-margin-right am-fr">99+</span></a></li>' +
                '<li><a href="/product"><span class="am-icon-product-hunt"></span> 产品<span class="am-badge am-badge-secondary am-margin-right am-fr">24</span></a></li>' +
                '<li><a href="admin-form.html"><span class="am-icon-pencil-square-o"></span> 订单<span class="am-badge am-badge-secondary am-margin-right am-fr">99+</span></a></li>' +
                '<li><a href="#"><span class="am-icon-users"></span> 客户</a></li>' +
                '<li class="admin-parent">' +
                '<a class="am-cf" data-am-collapse="{target: \'#collapse-nav\'}"><span class="am-icon-file"></span> 基础数据 <span class="am-icon-angle-right am-fr am-margin-right"></span></a>' +
                '<ul class="am-list am-collapse admin-sidebar-sub am-in" id="collapse-nav">' +
                '<li><a href="admin-user.html" class="am-cf"><span class="am-icon-check"></span> 执行过程<span class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span></a></li>' +
                '<li><a href="admin-help.html"><span class="am-icon-puzzle-piece"></span> 行业/经营范围</a></li>' +
                '<li><a href="admin-gallery.html"><span class="am-icon-th"></span> 用户<span class="am-badge am-badge-secondary am-margin-right am-fr">24</span></a></li>' +
                '<li><a href="admin-log.html"><span class="am-icon-calendar"></span> 用户权限</a></li>' +
                '<li><a href="admin-404.html"><span class="am-icon-bug"></span> 404</a></li>' +
                '</ul>' +
                '</li></ul>';
            callback(notes);
        }
    }
    $.commonoperation=methods;
})(jQuery);