import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    telaAtual: "Inicio",
    acoes: [{
      nome: "Apple",
      preco: 10,
      quantidadePortfolio: 5,
      aOperar: 0
    }, {
      nome: "Microsoft",
      preco: 10,
      quantidadePortfolio: 5,
      aOperar: 0
    }, {
      nome: "Inter",
      preco: 10,
      quantidadePortfolio: 5,
      aOperar: 0
    }, {
      nome: "Magalu",
      preco: 10,
      quantidadePortfolio: 5,
      aOperar: 0
    }, ],
    saldo: 10000
  },
  getters: {
    getComponent(state) {
      return state.telaAtual
    },
    getIndexAcao: (state) => nomeAcao => {
      return state.acoes.findIndex(acao => acao.nome === nomeAcao)
    },
    getAOperarAcao: (state) => indexAcao => {
      return state.acoes[indexAcao].aOperar
    },
    getQuantidadePortfolio: (state) => (indexAcao) => {
      return state.acoes[indexAcao].quantidadePortfolio
    },
    getValorTotalOperacao: (state) => (indexAcao) => {
      return state.acoes[indexAcao].preco * state.acoes[indexAcao].aOperar
    },
    getSaldo(state) {
      return state.saldo
    }
  },
  mutations: {
    setComponent(state, componente) {
      state.telaAtual = componente
    },
    setAcao(state, payload) {
      const  indexAcao = payload.index
      const operacao = payload.operacao
      const quantidadePortfolio = state.acoes[indexAcao].quantidadePortfolio
      const quantidadeOperacao = state.acoes[indexAcao].aOperar
      state.acoes[indexAcao].quantidadePortfolio = operacao === 'venda' ? quantidadePortfolio + -quantidadeOperacao : quantidadePortfolio + +quantidadeOperacao
      const precoAcao = state.acoes[indexAcao].preco
      state.saldo = operacao === 'venda' ? state.saldo + (precoAcao * quantidadeOperacao) : state.saldo - (precoAcao * quantidadeOperacao)
      state.acoes[indexAcao].aOperar = 0
    },
    setSaldo(state, valorOperacao) {
      state.saldo = state.saldo + valorOperacao
    },
    zerarOperacao(state, indexAcao) {
      state.acoes[indexAcao].aOperar = 0
    }
  },
  actions: {
    comprarAcao({
      commit,
      getters
    }, indexAcao) {
      const valorCompra = getters.getValorTotalOperacao(indexAcao)
      if (getters.getSaldo >= valorCompra) {
        commit('setAcao', {index:indexAcao})
      }
    },
    venderAcao({
      commit,
      getters
    }, indexAcao) {
      if (getters.getQuantidadePortfolio(indexAcao) >= getters.getAOperarAcao(indexAcao)) {
        commit('setAcao', {
          index: indexAcao,
          operacao: 'venda'
        })
      }
    },
  }
})