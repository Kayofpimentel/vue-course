<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque="'darkblue'">Teste de diretiva</p>
		<p v-destaque:fundo="corDeFundo"> Teste de diretiva com argumento </p>
		<p v-destaque:fundo.atrasar="'darkgrey'"> Teste de diretiva com modificador </p>
		<hr>
		<p v-hideAndSeek="2000"> Teste de diretiva local </p>
	</div>
</template>

<script>
export default {
	data(){
		return{
			corDeFundo:"red"
		}
	},
	directives:{
		hideAndSeek(el, binding){
			let atraso = binding.value
			setInterval(() => {
				if(el.style.visibility !== 'hidden'){
					el.style.visibility = 'hidden'
				}else{
					el.style.visibility = 'inherit'
				}
			}, atraso);
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

p{
	margin: 3vh auto; 
}
</style>
