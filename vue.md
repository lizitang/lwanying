### 条件渲染

v-if：直接不展示
v-show: 通过display:none来控制
v-else通常和v-if一起用


v-bind:动态绑定标签属性

### 事件绑定v-on
v-on有事件修改器：例如v-on:click.stop就是阻止事件冒泡
@keydown.enter="onKeydown"//时候执行enter的
@keydowm.13="onKeydown"


### 自定义事件
@my-event="onMyevent"

### 表单事件绑定
```
<input type="text" v-model="msg">
//修饰符
v-model.lazy="msg" --->彻底完成之后，blur之后才会更新
v-model.number
v-model.trim 裁剪掉前后空格
```
Vue中的控件，CheckBox,radio都是通过v-model
<input type="checkbox" v-model="msg">
select 同样也是但是绑定在select上面


### 组件之间的通信
