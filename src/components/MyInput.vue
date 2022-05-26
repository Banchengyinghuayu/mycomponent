
<template>

<!-- //这个相当于是子组件 -->


  <div class="my-input" :class="{'my-input-suffix': showicon}">
      <!-- :type="showPassword ? (mypassword ? text:password):type" 这里这个思路就流弊了 -->
      <input 
      :type="showPassword ? (mypassword ? 'text':'password'):type" 
      class="my-inputitem" 
      :placeholder="placeholder"
      :name="name"
      :disabled='disabled'
      :class="{'is-disabled':disabled}"
      :value="value"
      @input="handleinput($event)" 
      >
      <span class="my-input-ffix" v-if="showicon">
          <!--clearable&&value 还必需有值才会显示 -->
          <i class="iconfont" :class="icon" v-if="clearable&&value" @click="clear"></i>  
          <i class="iconfont" :class="[icon,{'isactive':mypassword}]"  v-if="showPassword" @click='changetype'></i>
      </span>
  </div>
</template>

<script>

export default {
    name:'MyInput',
    props:{
        placeholder:{
            type:String,
            default:''
        },
        type:{
            type:String,
            dafault:'text'
        },
        name:{
            type:String,
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        },
        value:{
            type:String,
            default:null
        },
        clearable:{
            type:Boolean,
            default:false
        },
        showPassword:{
            type:Boolean,
            default:false
        },
        icon:{
            type:String,
            default:''
        }

    },
    data(){
        return{
            //控制是否查看密码,此时传递进来的type就得动态了，见上面
            mypassword:false
        }
    },
    methods:{
        //双向绑定赋值
        handleinput(e){
            //两种方法都可以
            //this.$props可以拿到props里面所有的数据

            // this.$props.value=e.target.value
            this.$emit('input',e.target.value)
        },
        //清空事件
        clear(){
            // this.$props.value=''   // 这里使用这个不行，报错,不能更改父组件传递过来的值 props
            this.$emit('input','')   //向父组件传递 '' 
        },
        //是否可以查看密码 不能更改父组件传递过来的属性时，这里的思路方法就流弊了
        changetype(){
            // this.$props.type='text'
           this.mypassword=!this.mypassword
        }
    },
    //是否有小图标
    computed:{
        showicon(){
            return this.showPassword||this.clearable
        }
    }
}
</script>

<style lang='scss'>
    .my-input{
        width: 100%;
        position: relative;
        font-size: 14px;
        display: inline-block;
        .my-inputitem{
            -webkit-appearance: none;
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 40px;
            line-height: 40px;
            outline: none;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(0.645, 0.45, 0.355, 1);
            width: 100%;
            &:focus{
                outline: none;
                border-color: #409eff;
            }
            //是否禁用
            &.is-disabled{
                background-color: #dedfe6;
                cursor: not-allowed;
            }
        }
    }
    .my-input-suffix{
        .my-inputitem{
            padding-right: 30px;

        }
        .my-input-ffix{
            position: absolute;
            height: 100px;
            right: 10px;
            top: 0;
            line-height: 40px;
            text-align: center;
            color: #c0c4cc;
            transition: all .3s;
            z-index: 900;
            i{
                color: #c0c4cc;
                font-size: 14px;
                cursor: pointer;
                transition: color .2s cubic-bezier(.645,.045,.355,1);
            }
            //小眼睛激活
            .isactive{
               color: blue;
            }
        }
    }
</style>