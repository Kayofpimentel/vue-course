const v = new Vue({
  el: '#app',
  data: {
    titulo: 'Novo!'
  },
  methods: {
    alterarTitulo(event){
      const vm = this
      vm.titulo = event.target.value
      }
  }
})
console.log('working');
