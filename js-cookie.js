var cookieUtil = function(){
	get:function(name){
		var cookieName = encodeURIComponent(name)+"=";
		var cookieStart = document.cookie.indexOf(cookieName);
		var cookieValue = null;
		if(cookieName > -1){
			var cookieEnd = document.cookie.indexOf(';')
			if(cookieEnd == -1){
				cookieEnd =document.cookie.length;	
			}
			cookieValue = decodeURIComponent(document.cookie.slice(cookieStart+cookieName.length,cookieEnd))
		}
	},
	set:function(name,value,path,expires,domain,secure){
		var cookieText = encodeURIComponent(name)+"="+
						encodeURIComponent(value);
		if(expires instanceof Date){
			cookieText += ";expires="+expires.toGMTString()

		}
		if(path){
			cookieText +=";path="+path;
		}
		if(domain){
			cookieText+=";domain"+domain;	
		}				
		if(secure){
			cookieText+=";secure";
		}
		document.cookie = cookieText
	},
	unset:function(name,value,expires,domain,path,secure){
		this.set(name,'',new Date(0))
	}

}