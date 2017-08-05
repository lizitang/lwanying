function ajax(url,options){
	if(window.XMLHttpRequest){
		xhr = new XHRHttpRequest;
	}else{
		xhr =new ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.open("GET",url);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState ==4 && xhr.status ==200){
			//dosomething
			options.onsuccess(xhr);
		}
	}
}