//浅拷贝



//1.push方法
function copyArray(arr){
	var buf = [];
	for(var i=0;i<arr.length;i++){
		buf.push(arr[i]);
	}
	return buf;
}

//join缺点是数组中的项全变为了字符串形式
 function copoyArray(arr){
 	var buf=[];
 	buf = arr.join().split(',');
 	return buf;
 }

 //concat
 function copyArray(){
 	var buf=[];
 	buf=arr.concat();
 	return buf;
 }


//slice
 function copyArray(){
 	var buf=[];
 	buf=arr.slice();
 	return buf;
 }


 //深拷贝。递归方法
 function copyArray(arr,result){
 	var result = result ||[];
 	for(var i=0;i<arr.length;i++){
 		if(arr[i] instanceof Array){
 			result[i]=[];
 			copyArray(arr[i],result[i]);
 		}else{
 			result[i]=arr[i]
 		}
 	}
 	return result;
 }