const yaka = {
    data() {
        return {
            isLighton:false,
            isLightoff:true,
        }
    },
    methods:{
        tap: function(){
             this.isLighton = !this.isLighton
            }
        }
    }

vue.createApp(yaka).mount('#app')