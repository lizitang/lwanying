/**
 * Created by Administrator on 2017/8/7.
 */
function commafy(num){
    return num && num
            .toString()
            .replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2){
                return $2 + ',';
            });
}
commafy(1200000.11);