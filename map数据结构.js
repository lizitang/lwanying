//s写一个map数据结构，要求只能用接口访问属性；

/**
 * Created by lizi on 2017/8/14.
 * 题目要求：
 * 请用JavaScript实现map的数据结构，要求数据只能通过map提供的接口进行访问
 *
 * 我的疑问：啥是map？就是对象吗？
 */

function createMap() {
    var map = {};
    map.length = 0;
    return {
        set: function (name, value) {
            map.length++;
            map[name] = value;
        },

        get: function (name) {
            return map[name];
        }
    }
}

var t = createMap();
var t1 = createMap();

t.set('arr', [1, 2, 3, 4]);
// t.get('arr').push(5);

console.log(t.get('arr'));

