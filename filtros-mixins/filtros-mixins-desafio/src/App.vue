<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
		<div id="code-boxes">
			<section class="half-page">
				<h2>{{tituloEx1}}</h2>
				<hr>
				<p>Sem filtro de espaço por vírgula</p>
				<p>{{"Com filtro de espaço por vírgula" | espacoPorVirgula}}</p>
			</section>
			<section class="half-page">
				<h2>{{tituloEx2}}</h2>
				<hr>
				<p>Sem contagem</p>
				<p>{{"Com filtro de contagem" | textoContado}}</p>
			</section>
			<section class="half-page">
				<h2>{{tituloEx3}}</h2>
				<hr>
				<p>{{textoComVirgula}}</p>
				<p>{{textoComContagem}}</p>
			</section>
			<section class="half-page">
				<h2>{{tituloEx4}}</h2>
				<hr>
				<p>{{textoDoMixinSemVirgulaInvertido | espacoPorVirgula}}</p>
				<p>{{textoDoMixinSemContagemInvertido | textoContado}}</p>
			</section>
		</div>
	</div>
</template>

<script>
import alteracoesMixin from "./alteracoesMixin"

export default {
	mixins: [alteracoesMixin],
	data(){
		return{
			tituloEx1: "Exercício 1",
			tituloEx2: "Exercício 2",
			tituloEx3: "Exercício 3",
			tituloEx4: "Exercício 4",
			textoSemVirgula: "Texto com vírgula mas computado",
            textoSemContagem: "Texto contado mas computado"
			
		}
	},
	filters: {
		espacoPorVirgula(texto){
			return texto.split(" ").join(",")
		}
	},
	computed:{
		textoComVirgula(){
			const vm = this
			return vm.adicionarVirgula(vm.textoSemVirgula)
		},
		textoComContagem(){
			const vm = this
			return vm.adicionarContagem(vm.textoSemContagem)
		}
	},
	methods: {
		adicionarVirgula(texto){
			return texto.split(" ").join(",")
		},
		adicionarContagem(texto){
			const textoSeparado = texto.split(' ')
			for(let indexPalavra in textoSeparado){
				let palavra = textoSeparado[indexPalavra]
				let quantidadeLetras = palavra.split('').length
				textoSeparado[indexPalavra] = palavra + ' ('+quantidadeLetras+') '
			}
			return textoSeparado.join('')
		}
	}
}
</script>

<style>

@import url("./../assets/dom.css");

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 2rem;
}

#app h1{
	margin-top: 3vh;
}

#app p{
	font-size: 1.5rem;
}
</style>
