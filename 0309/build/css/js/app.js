/*! 12周年领红包 -Panli代购 v 0.0.1  | (c) Thu Mar 09 2017 16:51:53 GMT+0800 (中国标准时间)  Julian  | https://github.com/panli-com/special-2017-cn#readme  508 */
!function(){$(function(){$(".sp-main").on("click",".click-a",function(){var t=$(this),a=t.attr("data-src");_h=t.attr("data-h"),_w=t.attr("data-w");var n=$(".layer-html-"+a).html();PL.open({type:1,title:!1,closeBtn:!1,area:[_w+"px",_h+"px"],shadeClose:!0,skin:"layui-Pan-nobg",content:n})}),PD("body").on("click",".lay-close",function(){PL.closeAll()})})}();