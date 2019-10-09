Vue.component('',{
    template:
    `
        <button @click='on_click'>信息</button>
    `,
    props:['msg1'],
    methods:{
        on_click:function(){
            alert(this.msg);
            console.log(this.msg1);
        }
    }
})
// 父子组件通信
Vue.component('balance',{
    template:`
        <div>
            <show @show-balance='show_balance'></show>
            <div v-if="show">
                你的余额：￥100元
            </div>
        </div>
    `,
    data:function(){
        return {
            show: false,
        }
    },
    methods:{
        show_balance: function(data){
            this.show= true;
            console.log('data,data')
            
        }
    }
})

Vue.component('show',{
    template:`
        <button @click='on_click()'>显示余额</button>
    `,
    methods:{
        on_click(){
            this.$emit('show-balance',{
                message:'显示成功~~~'
            })
        }
    }
})

var Event = new Vue();

Vue.component('text-in',{
    template:`
        <div>
        文本输入：<input @keyup="on_change" v-model="write_in">
        </div>
        `,
    methods: {
        on_change:function(){
            Event.$emit('write-something',this.write_in);
        }
    }
        ,
    data:function(){
        return {
            write_in:'',
        }
        
    }
})
Vue.component('text-out',{
    template:`
        <div>
            文本输出：{{put_out}}
        </div>
    `,
    data:function(){
        return {
            put_out :'',
        }
    },
    mounted:function(){
        var me =this;
        Event.$on('write-something',function(data){
          me.put_out = data;
        })
    }
})

new Vue({
    el:'#app',
})


