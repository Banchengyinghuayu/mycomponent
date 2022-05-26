<template>

<!--  这个相当于是父组件-->


  <div id="app">
   <div class="row">
     <div>默认按钮</div>
    <my-button  >按钮</my-button>
    <my-button  @click="fn" type='primary'>登录</my-button>
    <my-button  type='success'>登录</my-button>
    <my-button  type='info'>登录</my-button>
    <my-button  type='danger'>登录</my-button>
   </div>
   <div class="row">
     <div>朴素按钮</div>
    <my-button plain >按钮</my-button>
    <my-button plain type='primary'>登录</my-button>
    <my-button plain type='success'>登录</my-button>
    <my-button plain type='info'>登录</my-button>
    <my-button plain type='danger'>登录</my-button>
   </div>
   <div class="row">
     <div>禁止点击按钮</div>
    <my-button disabled >按钮</my-button>
    <my-button disabled  type='primary'>登录</my-button>
    <my-button disabled type='success'>登录</my-button>
    <my-button disabled type='info'>登录</my-button>
    <my-button disabled type='danger'>登录</my-button>
   </div>
   <div class="row">
     <div>是否有圆角</div>
      <my-button round  >按钮</my-button>
      <!-- 既有文字又有图标 -->
      <my-button round icon="icon-duigou" type='primary'>登录</my-button>
      <my-button round icon="icon-duigou" type='success'>登录</my-button>
      <my-button round  type='info'>登录</my-button>
      <my-button round  type='danger'>登录</my-button>
   </div>
   <div class="row">
     <!-- icon的值是从iconfont.css 而来 -->
    <my-button  circle type='primary' icon="icon-shanchu"></my-button>
    <my-button  circle type='success' icon="icon-duigou"></my-button>
    <my-button  circle type='info'    icon="icon-youjian"></my-button>
    <my-button  circle type='danger'  icon="icon-star"></my-button>
   </div>

   <!-- input组件 -->
	<div>
        <my-input type='username' placeholder="请输入用户名"></my-input><br>
        <my-input type='password' placeholder="请输入密码"></my-input><br>
        <my-input type='text' disabled  placeholder="是否禁用"></my-input><br>
        <my-input type='text' v-model="username1" placeholder="双向绑定"></my-input><br>
        <my-input type='text' icon="icon-cancel-test" v-model="username2" clearable placeholder="是否清空"></my-input><br>
        <!-- password 改为 text 即可 -->
        <my-input type='password' icon="icon-yanjing" v-model="username3" show-password  placeholder="是否可以查看密码"></my-input><br>
        <my-input type='password' icon="icon-yanjing" v-model="username4" placeholder="是否可以查看密码"></my-input><br>

    </div>



  </div>
</template>

<script>
export default {
	data(){
		return{
			username1:'',
			username2:'',
			username3:'',
			username4:'',
		}
	},
    methods:{
      fn(){
        console.log(123);
      }
    }

}
</script>

<style lang="scss" scoped>
  .row{
    margin-bottom: 20px;
    .my-button{
      margin-right: 20px;
    }
  }
  .my-input{
	  width: 180px;
  }
</style>
