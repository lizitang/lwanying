//对基础类型进行值复制


function clone(obj){
	switch (typeof obj){
		case "undefined":
			break;
		case "number":
			copy = obj-0;
			break;
		case "string":
			copy = obj+"";
			break;
		case "boolean":
			copy = obj;
			break;
		case "object":
		//分两种情况，object和array
			if(obj ===null){
				copy = null;
			}else{
				if(object.prototype.toString().call(obj).slice(8,-1)==="Array"){
					copy = [];
					for(var i=0;i<obj.length;i++){
						copy.push(clone(obj[i]));
					}
				}else{
					copy = {};
					for(var j in obj){
						copy[j] = clone(obj[j])
					}
				}
			}
			break;
		default:
			copy = obj;
			break;			
	}
	return copy;
}