//手写一个去除指定 item 的函数，返回一个新数组， arr.remove(item);
Array.prototype.remove = function(item){
	var arr = this.slice(0);
	for(var i=0;i<arr.length;i++){
		if(arr[i] == item){
			arr.splice(i,1);
			i--;
		}
	}
	return arr;
}


Array.prototype.indexof=function(item){

    var arr=[];
    for(var i=0;i<arr.length;i++){
		if(arr[i]==item){
			arr.push(i);
  		}
	}
  	return arr;
}
