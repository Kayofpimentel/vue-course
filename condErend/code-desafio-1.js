const v = new Vue({
    el: '#app',
    data: {
      titulo: 'Desafio - Módulo 3',
      subTitulo1: 'Parte 1!',
      subTitulo2: 'Parte 2!',
      subTitulo3: 'Parte 3!',
      subTitulo4: 'Parte 4!',
      nome: 'Kayo',
      logado: false,
      anonimo: false,
      cores: ['vermelho', 'verde', 'azul'],
      livros: [
        {titulo: 'O Senhor dos Anéis', autor:'J.R.R. Tolkiens', edicao: 3},
        {titulo: 'The Way of Kings', autor:'Brandon Sanderson', edicao: 1}
      ],
      pessoas: [
        {id: 0, nome: 'Maria', notas: [7.67, 8.23, 4.5, 6]},
        {id: 1, nome: 'João', notas: [2, 3.25, 7, 8]}
      ]
    },
    computed: {
      
  
    },
    watch: {
      
    },
    methods: {
    }
  })
  console.log('working');
  