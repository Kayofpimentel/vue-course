<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<div>
			<span ref="paraCorrigir">
				Texto para corrigir.
			</span>
		</div>
		<div>
			<span v-mudar:mouseover.sumir="funcaoMudar" ref="paraSumir">
				Texto para sumir.
			</span>
		</div>
		<div>
			<span ref="paraDestacar">
				Texto para destacar.
			</span>
		</div>
		<span>
			<button v-mudar:click.corrigir="funcaoMudar"
			>Corretor</button>	
		</span>
		<span>
			<button v-mudar:click.sumir="funcaoMudar">Mr. M</button>
		</span>
		<span>
			<button v-mudar:click.destacar="funcaoMudar">Marca texto</button>
		</span>
		
		
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
	</div>
</template>

<script>
export default {
	data(){
		return{
			
		}
	},
	directives:{
		mudar(el, binding, vnode){
			let referencia = {}
			if(binding.modifiers['corrigir']) referencia = {tipo: 'paraCorrigir',estilo: 'textDecoration',valor: 'line-through'}
			if(binding.modifiers['sumir']) referencia = {tipo: 'paraSumir',estilo: 'visibility',valor: 'hidden'}
			if(binding.modifiers['destacar']) referencia = {tipo: 'paraDestacar',estilo: 'color',valor: 'red'}
			if(Object.keys(referencia).length > 0){
				const elemento = vnode.context.$refs[referencia.tipo]
				console.log(binding.arg)
				el.addEventListener(binding.arg,  function(){
					binding.value(elemento, referencia)} ,false)
			}
		},
	},
	methods: {
		funcaoMudar(elemento,referencia){
			elemento.style[referencia.estilo]=referencia.valor	
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

div{
	margin: 5vh auto;
}
</style>
