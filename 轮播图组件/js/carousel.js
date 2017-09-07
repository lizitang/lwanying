//轮播图的构造函数
function Carousel(obj){
	this.wrap = obj.wrap;
	this.wrapId = obj.wrap.id;//容器的id
	this.wrapWidth = this.wrap.offsetWidth;//容器宽
	this.imgNumber = obj.urlArr.length;//图片数
	this.activePage = 0;//轮播图当前页
	this.settimeId;//定时器id
	this.init(obj.urlArr);
}

Carousel.prototype = {
	constructor:Carousel,
	init:function(urlArr){
		this.wrap.style.position = "relative";
		this.wrap.style.overflow = "hidden";
		this.wrap.innerHTML = '<span id="' + this.wrapId + '_pre" class="fa fa-angle-left fa-3x"></span>'
		+'<span id="' + this.wrapId + '_next" class="fa fa-angle-right fa-3x"></span>'//存放前后箭头
		+'<ul id="' + this.wrapId + '_page"></ul>'//存放页码
		+'<div id="' + this.wrapId + '_container"></div>';//存放图片
		let container = document.getElementById(this.wrapId+'_container');
		let page = document.getElementById(this.wrapId+"_page");
		for(let value of urlArr){
			container.innerHTML +='<div class="'+this.wrapId+'_img-item"><img src="'+value+'"></div>';
			page.innerHTML = '<li class="'+this.wrapId+'_pagination"></li>';
		}
		container.style.width=this.imgNumber+"00%";
		container.style.left=0;
		for(let value of document.getElementsByClassName(this.wrapId+"_img-item")){
			value.style.width = 100 / this.imgNumber+"%";
		}
		document.getElementsByClassName(this.wrapId+"_pagination")[this.activePage].id=this.wrapId+"_active";
		this.pageActiveColor();
		this.setTime();
		this.bindEvent();
	},//构建dom结构
	bindEvent:function(){
		let preAngle = document.getElementById(this.wrapId+"_pre");
		let nextAngel = document.getElementById(this.wrapId+"_next");
		let pageUl = document.getElementById(this.wrapId+"_page");
		let pages = pageUl.getElementsByClassName(this.wrapId+"_pagination");
		for(let key = 0;key<pages.length;key++){
			pages[key].addEventListener('click',this.selectPage.bind(this,key),false);
			console.log(key);
		}
		this.wrap.addEventListener('mouseover',this.clearTime.bind(this));
		this.wrap.addEventListener('mouseout',this.setTime.bind(this));
		preAngle.addEventListener('click',this.leftAngleClick.bind(this));
		nextAngel.addEventListener("click",this.rightAngleClick.bind(this))
	},//绑定事件
	pageActiveColor:function(){
		document.getElementById(this.wrapId + "_active").id = "";
        document.getElementsByClassName(this.wrapId + "_pagination")[this.activePage].id = this.wrapId + "_active";
	},//绘制圆点
	leftAngleClick:function(){
		let container = document.getElementById(this.wrapId+"_container");
		if(this.activePage==0){
			this.activePage = this.imgNumber-1;
		}else{
			this.active--;
		}
		container.style.left="-"+this.activePage+"00%";
		this.pageActiveColor();
	},//点击左箭头
	rightAngleClick:function(){
		let container = document.getElementById(this.wrapId + "_container");
        if (this.activePage == this.imgNumber - 1) {
            this.activePage = 0;
        } else {
            this.activePage++;
        }
        container.style.left = "-" + this.activePage + "00%";
        this.pageActiveColor();
	},
	selectPage:function(selectNum){
		this.activePage = selectNum;
        let container = document.getElementById(this.wrapId + "_container");
        container.style.left = "-" + this.activePage + "00%";
        this.pageActiveColor();
	},//点击圆点定位到指定图片
	setTime:function(){
		let wrapId = this.wrapId;               //解决this绑定丢失
        this.settimeID = setInterval(function() {
            document.getElementById(wrapId + "_next").click();
        } , 3000);
        console.log("set");
	},//自动播放
	clearTime:function(){
		let theId = this.settimeID;             //解决this绑定丢失
        console.log("clear");
        clearInterval(theId);  
	}//鼠标炫富取消自动播放
}