import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('textoContado',function(texto){
	const textoSeparado = texto.split(' ')
	for(let indexPalavra in textoSeparado){
		let palavra = textoSeparado[indexPalavra]
		let quantidadeLetras = palavra.split('').length
		textoSeparado[indexPalavra] = palavra + ' ('+quantidadeLetras+') '
	}
	return textoSeparado.join('')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
