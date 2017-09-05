    /**
     * Created by lwy on 2017/9/5.
     */
    //œ¥≈∆À„∑®


    function shuffle(arr){
        return arr.sort(function(){
            return 0.5-Math.random();
        })
    }
    var arr=[2,5,3,1,4];


    //
    function shuffle1(arr){
        var len = arr.length;
        for(var i = 0; i < len - 1; i++){
            var idx = Math.floor(Math.random() * (len - i));
            var temp = arr[idx];
            arr[idx] = arr[len - i - 1];
            arr[len - i -1] = temp;
        }
        return arr;
    }