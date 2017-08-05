Array.prototype.norepeat = function(){
	var result = [];
	for(var i=0;i<this.length;i++){
		if(result.indexOf(this[i]) == -1){
			result.push(this[i]);
		}
	}
	return result;
};
[2,3,3,4,5,5].norepeat();