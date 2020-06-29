<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo" >
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo name="Seu Nome" >
					<input v-model="pessoa.nome" type="text">
				</Rotulo>
				<Rotulo name="Seu Sobrenome">
					<input v-model="pessoa.sobrenome" type="text">
				</Rotulo>
				<Rotulo name="E-mail">
					<input v-model="email" type="email">
				</Rotulo>
				<Rotulo name="Senha">
					<input v-model="senha" type="password">
				</Rotulo>
				<Rotulo name="Nome Completo">
					<Completo v-model="pessoa"></Completo>
				</Rotulo>
				<Rotulo name="Salvar dados?">
					<span ><input type="radio" value='1' v-model="permissao">Sim</span>
					<span><input type="radio" value=0 v-model="permissao">Não</span>
				</Rotulo>
				<button v-if="salvarDados" @click.prevent="enviar">Enviar</button>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<p>Bem vindo {{pessoa.nome}}</p>
				<p>Seu sobrenome é {{pessoa.sobrenome}}</p>
				<p>Seu nome completo é {{nomeCompleto()}}</p>
				<p>Seu email: {{email}}</p>
				<p>Senha criada!</p>
				<button  @click="enviar">Voltar</button>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Completo from './components/Completo.vue'

export default {
	name: 'app',
	components: { Rotulo, Completo },
	data(){
		return{
			pessoa:{
				nome: 'John',
				sobrenome: 'Doe'
			},
			email: '',
			senha: '',
			permissao: '0',
			enviado: false
		}
	},
	computed:{
		salvarDados(){
			const vm = this
			return vm.permissao === '1' ? true : false
		}
	},
	methods:{
		enviar(){
			const vm = this
			vm.enviado = !vm.enviado
		},
		nomeCompleto(){
			const vm = this
			return vm.pessoa.nome +' '+vm.pessoa.sobrenome
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: left;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
