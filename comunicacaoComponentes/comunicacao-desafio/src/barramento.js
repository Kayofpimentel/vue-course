import Vue from 'vue'
export default new Vue({

    methods:{
        selecionarInfo(...info){
            this.$emit('infoSelecionada', info)
        },
        mostrarInfo(callback){
            this.$on('infoSelecionada', callback)
        }
    }
})