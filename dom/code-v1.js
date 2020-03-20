const v = new Vue({
  el: '#app',
  data: {
    titulo: 'Zero',
    subTitulo1: 'Elementos!',
    subTitulo2: 'Eventos!',
    subTitulo3: 'Propriedades Computadas!',
    subTitulo4: 'Propriedades Reativas!',
    subTitulo5: 'Estilos!',
    link: 'https://disruptive.house',
    linkHtml: '<a href="https://disruptive.house">Novo Link!</a>',
    contador1: 0,
    contador2: 0,
    coordX: 0,
    coordY: 0,
    testeInput: '',
    estiloAzul: false,
    estiloVerde: false,
    estiloVermelho: false,
    estiloInverte: false,
    estiloGrande: false,
    destaqueAzul: true,
    bdCor: 'pink',
    ioClasse: 'sumir',
    ioBdCor: false,
    barraEstilo: '',
    faltanteEstilo: '',
    barraProgresso: 0,
    progredindo: ''
  },
  computed: {
    resultado1() {
      const vm = this
      return vm.contador1 >= 5 ? 'O resultado é maior ou igual a 5.' : 'O resultado é menor que 5.'
    },
    resultado2() {
      const vm = this
      return vm.contador2 != 10 ? 'Não é 10!' : 'É 10!'
    },
    destacar(){
      const vm = this
      return vm.destaqueAzul ? 'estilo-azul estilo-grande' : ''
    }

  },
  watch: {
    resultado2() {
      const vm = this
      window.t = setTimeout(() => {
        vm.contador2--
      }, 2000)
    },
    bdCor(){
      const vm = this
      if(!vm.ioBdCor){
        vm.bdCor = 'black'
      }
    },
    barraProgresso(){
      const vm = this
      console.log(vm.barraProgresso < 10 && vm.progredindo == 'none')
      if(vm.barraProgresso < 10 && vm.progredindo == 'none'){
          vm.barraEstilo = 'background-color:black;padding: 0vh '+vm.barraProgresso+'vw;'
          faltante = 10 - vm.barraProgresso
          vm.faltanteEstilo = 'margin: 0vh ' + faltante + 'vw'
          setTimeout(() => {
            vm.barraProgresso += 1
          }, 1000);
      }
      if(vm.barraProgresso >= 10){
        vm.progredindo = ''
        vm.barraProgresso = 0
        vm.barraEstilo = 'background-color:white;padding: 0vh '+vm.barraProgresso+'vw;'
        vm.faltanteEstilo = 'margin: 0vh 10vw'
      }
    }
  },
  methods: {
    alterarTexto() {
      const vm = this
      vm.titulo = 'Módulo 2'
      return vm.titulo
    },
    somarContador(initial) {
      const vm = this
      vm.contador1 += initial
    },
    attCoord() {
      const vm = this
      vm.coordX = event.clientX
      vm.coordY = event.clientY
    },
    alertar() {
      alert('YOU ARE ALERTED!')
    },
    pegarTecla() {
      const vm = this
      vm.testeInput = event.target.value
    },
    aumentar() {
      const vm = this
      vm.contador1++
    },
    diminuir() {
      const vm = this
      vm.contador1--
    },
    comecarProgresso(){
      const vm = this
      vm.barraProgresso += 1
      vm.progredindo = 'none'
    }
  }
})
console.log('working');
