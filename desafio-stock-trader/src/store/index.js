import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    telaAtual: "Inicio",
    msgs: [{
      tipo: "compra",
      texto: "Você comprou 5 ações de Apple por R$ 0"
    }, {
      tipo: "compra",
      texto: "Você comprou 5 ações de Microsoft por R$ 0"
    }, {
      tipo: "compra",
      texto: "Você comprou 5 ações de Inter por R$ 0"
    }, {
      tipo: "compra",
      texto: "Você comprou 5 ações de Magalu por R$ 0"
    }],
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
    getMsgs(state) {
      return state.msgs
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
      const indexAcao = payload.index
      const operacao = payload.operacao
      const quantidadePortfolio = state.acoes[indexAcao].quantidadePortfolio
      const quantidadeOperacao = state.acoes[indexAcao].aOperar
      const precoAcao = state.acoes[indexAcao].preco
      const operar = (mensagem, novoPortfolio, novoSaldo) => {
        state.msgs.push(mensagem)
        state.acoes[indexAcao].quantidadePortfolio = novoPortfolio
        state.saldo = novoSaldo
      }
      if (operacao === 'venda') {
        const mensagem = {
          tipo: 'venda',
          texto: `Você vendeu ${quantidadeOperacao} ações de ${state.acoes[indexAcao].nome} por R$ ${precoAcao}`
        }
        const novoPortfolio = quantidadePortfolio + -quantidadeOperacao
        const novoSaldo = state.saldo + (precoAcao * quantidadeOperacao)
        operar(mensagem, novoPortfolio, novoSaldo)
      } else {
        const mensagem = {
          tipo: 'compra',
          texto: `Você comprou ${quantidadeOperacao} ações de ${state.acoes[indexAcao].nome} por R$ ${precoAcao}`
        }
        const novoPortfolio = quantidadePortfolio + +quantidadeOperacao
        const novoSaldo = state.saldo - (precoAcao * quantidadeOperacao)
        operar(mensagem, novoPortfolio, novoSaldo)
      }
      state.acoes[indexAcao].aOperar = 0
    },
    setSaldo(state, valorOperacao) {
      state.saldo = Number(Math.round((state.saldo + valorOperacao) + "e2") + "e-2")
    },
    zerarOperacao(state, indexAcao) {
      state.acoes[indexAcao].aOperar = 0
    },
    setPrecoAleatorio(state) {
      state.acoees = state.acoes.map((acao) => {
        const variacaoAleatoria = Math.random() * (.1 + .099) - .099
        const variacao = acao.preco * variacaoAleatoria
        acao.preco = Number(Math.round((acao.preco + variacao) + "e2") + "e-2")
      })
    },
  },
  actions: {
    comprarAcao({
      commit,
      getters
    }, indexAcao) {
      const valorCompra = getters.getValorTotalOperacao(indexAcao)
      if (getters.getSaldo >= valorCompra) {
        commit('setAcao', {
          index: indexAcao
        })

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
    variarAcao({
      commit
    }) {
      const simulacao = () => setInterval(() => {
        commit('setPrecoAleatorio')
      }, 2000)
      simulacao()
    }
  }
})