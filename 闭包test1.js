//代码，每隔一秒输出，0到4，考闭包
//1.es6
for(let i=0;i<5;i++){
	setTimeout(function(){
		console.log(i)
	},1000)
}

//es5,闭包
for(var  i=0;i<5;i++){
	(function(){
		setTimeout(function(i){
				console.log(i)
			},i*1000)
	})(i)
	
}