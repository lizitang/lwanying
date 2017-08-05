//单击li弹出每个li的索引
for(var i=0;i<len;i++){
	(function(idx){
		li.onclick=function(){
			alert(idx);
		}
	})(i)
}