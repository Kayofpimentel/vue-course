export default{
    data(){
        return{
            textoDoMixinSemVirgula: "Adicionando virgula com propriedade computada do mixin.",
            textoDoMixinSemContagem: "Adicionando contagem com propriedade computada do mixin."
        }
    },
    computed:{
        textoDoMixinSemVirgulaInvertido(){
            return this.textoDoMixinSemVirgula.split('').reverse().join('')
        },
        textoDoMixinSemContagemInvertido(){
            return this.textoDoMixinSemContagem.split('').reverse().join('')
        }
    }
}