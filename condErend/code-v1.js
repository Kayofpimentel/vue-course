const v = new Vue({
  el: '#app',
  data: {
    titulo: 'Módulo 3',
    subTitulo1: 'Condicional!',
    subTitulo2: 'Listas!',
    subTitulo3: 'Lista em Lista!',
    subTitulo4: 'Lista de números!',
    nome: 'Kayo',
    logado: false,
    anonimo: false,
    cores: ['vermelho', 'verde', 'azul'],
    pessoas: [
      {nome: 'Ana', idade: 26, peso: 60},
      {nome: 'João', idade: 28, peso: 75}
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
