/*! 旺一整年 v 0.0.1  | (c) Mon Dec 18 2017 16:42:28 GMT+0800 (中国标准时间)  Julian  | https://github.com/panli-com/special-2017-cn#readme  544 */
function LayoutClick(o){var n=$(".layer-html-"+o).html();PL.open({type:1,title:!1,closeBtn:!1,area:["1020px","430px"],shadeClose:!0,skin:"layui-Pan-nobg",content:n})}!function(){$(function(){$("body").on("click",".close-layer",function(){PL.closeAll()}),$(window).scroll(function(){var o=$(window).scrollTop(),n=o,l=$(".footer").offset().top-700;o>400&&n<l?$(".floor-nav").show():$(".floor-nav").hide()})})}();