/*题目：给定一个包含N个整数的数组A，找出所有不一样的组合
 i 、j、k ,使得 A[i]+A[j]+A[k]=0; 例如 
 A=[-1,0,1,2,-1,4],输出为[-1,0,1],[-1,-1,2]。
 请用javascript实现。*/

 function sum(arr){
 	var n=arr.length;
 	var result=[];
 	for(var i=0;i<n-2;i++){
 		for(var j=1;j<n-1;j++){
 			for(var k=2;k<n;k++){
 				if(arr[i]+arr[j]+arr[k]==0){
 					var temp=[arr[i],arr[j],arr[k]];
 					result.push(temp);
 				}
 			}
 		}
 	}
 	//子数组排序
	result.forEach(function(item){
		return item.sort();
	})
	 //二维数组去重
	var hash={};
	var newArr=[];
	for(var i=0,len=result.length;i<len;i++){
		if(!hash[result[i]]){
	 		newArr.push(result[i]);
	 		hash[result[i]] = true;
	 	}
	}
	console.log(newArr);
 }
 sum([-1,0,1,2,-1,4])
 
