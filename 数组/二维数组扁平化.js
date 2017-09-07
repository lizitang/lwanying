/*利用apply,concat转换*/

function reduceArr(arr){
	return Array.prototype.concact.apply([],arr)
	//return [].concat.apply([],arr)
}

/*利用reduce*/
function reduceArr1(arr){
	return arr.reduce(function(pre,cur){
		return pre.concat(cur)
	},[])
}

/*es6的展开运算符*/

function reduceArr2(arr){
	return [].concat(...arr)
}