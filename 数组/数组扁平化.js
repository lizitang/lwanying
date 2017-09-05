var arr = [1,[3,[4],[5,[6,7]],8],[9,[10]]];
var newArr=[];

function flat(arr,newArr){
	for(var i=0;i<arr.length;i++){
		//类型为number直接放进newArr
		if(typeof arr[i] == "number"){
			newArr.push(arr[i])
		}else{
			flat(arr,newArr)
		}
	}
	console.log(newArr);
}

flat(array,newArr);