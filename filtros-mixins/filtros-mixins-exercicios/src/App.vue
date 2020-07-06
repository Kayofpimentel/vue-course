<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{cpf | formatarCPF | inverter}}</p>
		<input type="text" :value="cpf | formatarCPF | inverter">
		<hr>
		<span>
			<Frutas></Frutas>
		</span>
		<span>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
			</ul>
			<div>
				<input type="text" v-model="fruta" @keydown.enter="add">
			</div>
		</span>
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
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

span{
	width: 20vw;
	display: inline-block;
}

</style>
