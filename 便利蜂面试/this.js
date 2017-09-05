var a={
	text:1,
	alert:function(){
		console.log(this.text);
	}
}

function b(cb){
	cb()
}
b(a.alert);//undefined