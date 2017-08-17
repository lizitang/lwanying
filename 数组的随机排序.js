/**
 * Created by Administrator on 2017/8/7.
 */
function randomArray(arr){
    return arr.sort(function(){
        return 0.5-Math.random();
    });
}
var arr1=[1,2,3,4,5,6];
randomArray(arr1);