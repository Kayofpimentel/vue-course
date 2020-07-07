<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<div id="code-boxes">
			<section class="half-page">
				<h2>filtros</h2>
				<hr>
				<div>
					<p>{{cpf | formatarCPF | inverter}}</p>
					<input type="text" :value="cpf | formatarCPF | inverter">
				</div>
			</section>
			<section class="half-page">
				<h2>mixin local</h2>
				<ul>
					<li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
				</ul>
				<div>
					<input type="text" v-model="fruta" @keydown.enter="add">
				</div>
			</section>
			<section class="half-page">
				<h2>mixin no componente</h2>
				<Frutas></Frutas>
			</section>
		</div>
	</div>
</template>

<script>
import Frutas from './Frutas.vue'
import frutasMixin from './frutasMixin.js'

export default {
	components: {Frutas},
	mixins: [frutasMixin],
	filters: {
		formatarCPF(valor){
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
	data(){
		return{
			cpf: '00000000010',
		}
	},
	methods:{
	},
	created(){
        console.log('Testando app!')
    }	
}
</script>

<style>

@import url("./../assets/dom.css");

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	font-size: 1.5rem;
}
</style>
