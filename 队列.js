function Queue(){
	this.dataStore = [];
	this.enqueue =enqueue;
	this.dequeue = dequeue;
	this.font = font;
	this.back =back;
	this.empty =empty;
}

//入队
 function enqueue(elment){
 	this.dataStore.push(elment)
 }

 //出队
 function dequeue(elment){
 	return this.dataStore.shift(elment)
 }

 //取出数组第一个元素
 function front(){
 	return this.dataStore[0]
 }

 //取出最后一个
 function back(){
 	return this.dataStore[this.dataStore.length-1]
 }

