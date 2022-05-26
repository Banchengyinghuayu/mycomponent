import Vue from 'vue'
import App from './App.vue'

//引入
import MyButton from './components/MyButton.vue'
import MyInput from './components/MyInput.vue'
//全局注册
Vue.component(MyButton.name,MyButton)  //和MyButton.vue组件的name相同.
Vue.component(MyInput.name,MyInput)  //和input.vue组件的name相同.

//引入字体图标样式
import './assets/font_3424295_9ml5vax0v5v/iconfont.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
