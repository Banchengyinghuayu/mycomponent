<template>
<!-- 动态添加了类名 -->
<!-- :class动态添加类名，可以数组也可以对象  注意此处对象键是单引号-->
  <button @click="handle" class="my-button"
   :class="[`my-button-${type}`,
   {'is-plain':plain,'is-round':round,
   'is-circle':circle,'is-disabled':disabled}]" :disabled='disabled'>
    <!-- icon 传过来的值是什么就显示该字体图标 -->
	<!-- v-if="icon" 表示有了icon 才会显示图标 -->
    <i class="iconfont" :class="icon" v-if="icon"></i>
	<!-- 如果插槽没有传递任何内容过来，span就没必要显示 ,否则只传递了图标过来的样式不好看-->
    <span v-if='$slots.default'><slot></slot></span>
  </button>
</template>

<script>
export default {
  name:'MyButton' ,
  //props:['type'],
  //校验基本类型等
  props:{
    type:{
      type:String,
      default:'default'
    },
    plain:{
      type:Boolean,
      default:false
    },
    round:{
      type:Boolean,
      default:false
    },
    circle:{
      type:Boolean,
      default:false
    },
    icon:{
      type:String,
      default:''
    },
	disabled:{
		type:Boolean,
		default:false
	}
  },
  methods:{
	  //给所有的button注册一个点击事件
	  handle(e){
		  this.$emit('click',e)
	  }
  },
  created(){
    console.log(this.type);
	//可以拿到所有的插槽
    console.log(this.$slots);
  }
}
</script>


<style scoped lang="scss">
  .my-button{
    background-color: aqua;
    border: 1px solid #eee;
     padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  .my-button-primary{
    background-color: aliceblue;
    padding: 10px 15px;
    border-radius: 10px;
  }
  .my-button-success{
    background-color:green;
    color: #eee;
     padding: 10px 15px;
    border-radius: 10px;
  }
  .my-button-info{
    background-color:yellow;
     padding: 10px 15px;
    border-radius: 10px;
  }
  .my-button-danger{
    background-color: yellowgreen;
     padding: 10px 15px;
    border-radius: 10px;
  }


  // plain 的样式
  .my-button-primary.is-plain{
    background-color: rgba( 240,248,255, 0.3);
    padding: 10px 15px;
    border-radius: 10px;
    &:hover,
    &:focus{
      background: #fff;
      border-color:#409eff ;
      color: red;
    }
  }
  .my-button-success.is-plain{
    background-color:rgba(0,128,0,0.3);
    color: green;
     padding: 10px 15px;
    border-radius: 10px;
    &:hover,
    &:focus{
      background: #fff;
      border-color:#409eff ;
      color: red;
    }
  }
  .my-button-info.is-plain{
    background-color:rgba( 255,255,0, 0.3);
     padding: 10px 15px;
    border-radius: 10px;
    &:hover,
    &:focus{
      background: #fff;
      border-color:#409eff ;
      color: red;
    }
  }
  .my-button-danger.is-plain{
    background-color: rgba( 154,205,50, 0.3);
     padding: 10px 15px;
    border-radius: 10px;
    &:hover,
    &:focus{
      background: #fff;
      border-color:#409eff ;
      color: red;
    }
  }
  
  //圆角样式
  .my-button-primary.is-round{
    background-color: aliceblue;
    padding: 10px 15px;
    border-radius: 30px;
    
  }
  .my-button-success.is-round{
    background-color:green;
    color: #eee;
     padding: 10px 15px;
    border-radius: 30px;
  }
  .my-button-info.is-round{
    background-color:yellow;
     padding: 10px 15px;
    border-radius: 30px;
  }
  .my-button-danger.is-round{
    background-color: yellowgreen;
     padding: 10px 15px;
    border-radius: 30px;
  }


//circle样式

.my-button-primary.is-circle{
    background-color: aliceblue;
    padding: 15px;
    border-radius: 50%;
    
  }
  .my-button-success.is-circle{
    background-color:green;
    color: #eee;
    padding: 15px;
    border-radius: 50%;
   }
  .my-button-info.is-circle{
    background-color:yellow;
    padding: 15px;
    border-radius: 50%;
   }
  .my-button-danger.is-circle{
    background-color: yellowgreen;
    padding: 15px;
    border-radius: 50%;
   }
	
	//图标和文字都有的样式,表示只要是有类名为iconfont的后面接了span 标签，那就给span添加样式
	.my-button [class*=iconfont]+span{
		margin-left: 10px;
	}

	//disabled 样式
.my-button-primary.is-disabled{
	opacity: .5;
    cursor: not-allowed;
	background-color: aliceblue;
	
  }
.my-button-success.is-disabled{
	opacity: .5;
   cursor: not-allowed;
	background-color: green;
  }
.my-button-info.is-disabled{
	opacity: .5;
    cursor: not-allowed;
	background-color: yellow;
  }
.my-button-danger.is-disabled{
	opacity: .5;
    cursor: not-allowed;
	background-color: yellowgreen;
  }

</style>
