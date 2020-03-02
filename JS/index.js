var tabs = document.getElementById('tabs').getElementsByTagName('li')
var lists = document.getElementById('lists').getElementsByTagName('ul')
var banner = document.getElementById('banner')
var bannerTop = banner.offsetTop



// 为每个li添加点击事件
for(var i = 0; i < tabs.length; i++){
  tabs[i].onclick = showList;//为每个点击事件添加方法
}
function showList(e){
  // 把所有li的active清楚,然后给点击了的li添加active
  for(var i = 0; i < tabs.length; i++){
    if(tabs[i] === this){
      tabs[i].className = 'active';
      lists[i].className = 'clearfix active';
    }else{
      tabs[i].className = '';
      lists[i].className = 'clearfix';
    }
  }
  // 阻止默认事件
  //谷歌及IE8以上
  e.preventDefault();
  //IE8及以下
  window.event.returnValue = false;
  //无兼容问题（但不能用于节点直接onclick绑定函数）
  return false;
}
window.onscroll = function(){
  var scrollTop = document.documentElement.scrollTop;
  if(scrollTop >= bannerTop){
    banner.className = 'seckill-banner fixed'
  }else{
    banner.className = 'seckill-banner'
  }
}