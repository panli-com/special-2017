/*! 中秋节 -Panli代购 v 0.0.1  | (c) Wed Aug 30 2017 10:47:32 GMT+0800 (中国标准时间)  Julian  | https://github.com/panli-com/special-2017-cn#readme  527 */
function floorNnav(){var o=$(window).width(),n=$(".sp-main").offset().left,t=$(".floor-nav").width();if(o>=1444){var l=n-t-15;$(".floor-nav").css("left",l)}else $(".floor-nav").css({left:"10px",right:""})}function goTofloorC(o){var n=$("#"+o).offset().top;$("body,html").animate({scrollTop:n-14},300)}!function(){$(function(){$(".floor-nav").on("click","li",function(){var o=$(this),n=o.attr("floor");goTofloorC(n)}),$(".back-top").on("click",function(){$("body,html").animate({scrollTop:0},300)}),floorNnav()}),$("#jingxi-1").on("click",function(){var o=$(this),n=o.attr("data-src"),t=$(".layer-html-"+n).html();PL.open({type:1,title:!1,closeBtn:!1,area:["1020px","330px"],shadeClose:!0,skin:"layui-Pan-nobg",content:t})}),$("#jingxi-2").on("click",function(){var o=$(this),n=o.attr("data-src"),t=$(".layer-html-"+n).html();PL.open({type:1,title:!1,closeBtn:!1,area:["1020px","320px"],shadeClose:!0,skin:"layui-Pan-nobg",content:t})}),$("body").on("click",".close-layer",function(){PL.closeAll()}),$(window).resize(function(){floorNnav()}),$(window).scroll(function(){var o=$(window).scrollTop(),n=o,t=$(".footer").offset().top-700;o>400&&n<t?$(".floor-nav").show():$(".floor-nav").hide()})}();