var content = 'helloworld,[img:(http://www.37.com/helloworld.jpg)]';
function a(str){
	var s=str.match(/\(.*?\)/g);
	var ns=s[0].slice(1,-1);
	return ns;
}
var c=a(content);
content.replace(/\[.*?\]/g,'<a href='+'"'+c+'"'+'><img src='+'"'+c+'"'+'></a>');