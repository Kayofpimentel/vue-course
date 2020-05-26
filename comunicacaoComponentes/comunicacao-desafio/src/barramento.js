import Vue from 'vue'
export default new Vue({

    methods:{
        selecionarInfo(id, pessoa){
            const info = {
                id: id, pessoa: pessoa 
            }
            this.$emit('infoSelecionada', info)
        },
        mostrarInfo(callback){
            this.$on('infoSelecionada', callback)
        }
    }
})