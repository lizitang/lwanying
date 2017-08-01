var i = 1;
(function(){
	var start = new Date().getTime();
	console.log(start);
	var si=setInterval(function(){
		var now = new Date().getTime();
		if(now < (start+100)){
			i++;
		}else{
			console.log(i);
			clearInterval(si)
		}
	},10);
})();
//10