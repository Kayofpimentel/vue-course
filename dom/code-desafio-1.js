const v = new Vue({
    el: '#desafio1',
    data: {
      nome: 'Kayo',
      idade: '20',
      multiplicador: 3, 
      linkImg: 'https://i1.wp.com/www.institutoniemeyer.org/wp-content/uploads/2018/09/teste.png'
    },
    methods: {
      alterarNome(event){
            const vm = this
            vm.nome = event.target.value
      },
      alterarIdade(event){
        const vm = this
        vm.idade = event.target.value
      },
      multiplicarIdade(){
        const vm = this
        return 3 * vm.idade
      },
      numRandom(){
        const newRand = Math.random()
        return newRand
      }
    }
  })

  console.log('working');
  

  i1.wp.com/www.institutoniemeyer.org/wp-content/uploads/2018/09/teste.png