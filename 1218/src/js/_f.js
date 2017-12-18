function LayoutClick(eln){
  var html = $(".layer-html-" + eln).html();
  PL.open({
    type: 1,
    title: false,
    closeBtn: false,
    area: ['1020px', '430px'],
    shadeClose: true,
    skin: 'layui-Pan-nobg', //没有背景色 
    content: html
  });
}
