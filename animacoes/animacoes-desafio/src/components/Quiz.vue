<template>
    <transition :leave-active-class="animateOut" :enter-active-class="animateIn" type="animation" mode="out-in">
        <div class="quiz-card" :style="{background: estiloCartao}" v-if="!perguntaRespondida" show key="aResponder">
            <h3>{{infoPergunta.pergunta}}</h3>
            <hr>
            <div id="respostas" >
                <b-button tag="span" v-for="(resposta,index) in infoPergunta.respostas" :key="resposta" @click.prevent="escolherResposta(index)">
                <b-badge tag="div">{{index}}</b-badge>
                <div class="resposta">{{resposta}}</div> 
                </b-button>
            </div>
        </div>
        <div v-else  key="respondido" show class="quiz-card" :style="{background: estiloCartao}">
            <h2>{{respostaCorreta ? "Resposta certa! :)" : "Resposta errada! :("}}
            </h2>
            <b-button @click="irParaProximaPergunta">PRÓXIMA PERGUNTA</b-button>
        </div>
      </transition>
</template>

<script>
export default {
    props:{
        infoPergunta:{
            type: Object,
            required: true
        }
    },
     data(){
        return{
            perguntaRespondida: false,
            respostaCorreta: false,
            animateIn: "animate__animated animate__rollIn",
            animateOut: "animate__animated animate__rollOut"
        }
    },
    computed:{
        estiloCartao(){
            if (!this.perguntaRespondida){
                return "linear-gradient(125deg,  skyblue 10%, lightblue 55%, lightskyblue 100%)"
            }
            else{
                return this.respostaCorreta ? "darkgreen" : "darkred"
            }
            
        }
    },
    methods:{
        escolherResposta(index){
            this.respostaCorreta = this.infoPergunta.respostaCerta === index ? true : false
            this.perguntaRespondida = true 
            
        },
        irParaProximaPergunta(){
            this.perguntaRespondida = false 
            this.$emit('novaPergunta', this.perguntaRespondida)
        }
    }
}
</script>

<style lang="scss">
    .quiz-card{
        width: 65vw;
        height: 45vh;
        margin: 10vh auto 0 auto;
        text-align: center;
        background: linear-gradient(125deg,  skyblue 10%, lightblue 55%, lightskyblue 100%)
    }

    #respostas{
        display: flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
        
        span{
            display: flex;
            align-content: flex-start;
            justify-content: flex-start;
            width: 25vw;
            height: 5vh !important;
            margin: 3vh auto;
            padding:0 ;
            background-color: limegreen;

            div.badge{
                display: flex;
                width: 10%;
                height: 105%;
                background-color: darkgreen;
                color: white;
                align-items: center;
                justify-content: center;
            }

            div.resposta{
                display: flex;
                width: 90%;
                height: 100%;
                color: black;
                background-color: transparent;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>