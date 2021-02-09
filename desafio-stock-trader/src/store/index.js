import axios from 'axios'
import {
  createStore
} from 'vuex'
export default createStore({
  state: {
    conexaoBD: 'https://curso-vue18-default-rtdb.firebaseio.com/',
    telaAtual: "Inicio",
    msgs: [],
    acoes: [],
    saldo: 0,
    resultado: 0
  },
  getters: {
    getComponent(state) {
      return state.telaAtual
    },
    getIndexAcao: (state) => nomeAcao => {
      return state.acoes.findIndex(acao => acao.nome == nomeAcao)
    },
    getPrecoAcao: (state) => indexAcao => {
      return state.acoes[indexAcao].preco
    },
    getAcoes(state) {
      return state.acoes
    },
    getAOperarAcao: (state) => indexAcao => {
      return state.acoes[indexAcao].aOperar
    },
    getNomeAcao: (state) => indexAcao => {
      return state.acoes[indexAcao].nome
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
    },
    getResultado(state){
      return state.resultado
    },
    getConDB(state) {
      return state.conexaoBD
    }
  },
  mutations: {
    setComponent(state, componente) {
      state.telaAtual = componente
    },
    setQuantidadeAcao(state, acao) {
      state.acoes[acao.indexAcao].quantidadePortfolio = acao.portfolioFinal
    },
    setSaldo(state, saldoFinal) {
      state.saldo = Number(Math.round(saldoFinal + "e2") + "e-2")
    },
    setAOperar(state, acao) {
      state.acoes[acao.indexAcao].aOperar = acao.aOperar
    },
    setPrecoAleatorio(state) {
      state.acoes.map(acao => {
        const variacaoAleatoria = Math.random() * (.11 + .099) - .099
        const variacao = acao.preco * variacaoAleatoria
        acao.preco = Number(Math.round((acao.preco + variacao) + "e2") + "e-2")
      })
    },
    setPortfolio(state, novasAcoes) {
      state.acoes = state.acoes.concat(novasAcoes)
    },
    addMensagem(state, mensagem) {
      state.msgs.push(mensagem)
    },
    updateResultado(state, resultadoAtual) {
      state.resultado = Number(Math.round(resultadoAtual+ "e2") + "e-2")
    }
  },
  actions: {
    comprarAcao({
      dispatch,
      getters
    }, indexAcao) {
      const valorCompra = getters.getValorTotalOperacao(indexAcao)
      if (getters.getSaldo >= valorCompra) {
        dispatch('criarOperacao', {
          index: indexAcao
        })
      }
    },
    venderAcao({
      dispatch,
      getters
    }, indexAcao) {
      const quantidadeOperacao = getters.getAOperarAcao(indexAcao)
      const quantidadePortfolio = getters.getQuantidadePortfolio(indexAcao)
      const quantidadeFinal = quantidadePortfolio - quantidadeOperacao
      if (quantidadeFinal >= 0) {
        dispatch('criarOperacao', {
          index: indexAcao,
          operacao: 'venda'
        })
      }
    },
    criarOperacao({
      getters,
      dispatch
    }, payload) {
      const indexAcao = payload.index
      const operacao = payload.operacao
      const quantidadeOperacao = getters.getAOperarAcao(indexAcao)
      const precoAcao = getters.getPrecoAcao(indexAcao)
      if (operacao === 'venda') {
        const mensagem = {
          tipo: 'venda',
          texto: `Você vendeu ${Number(quantidadeOperacao)} ações de ${getters.getNomeAcao(indexAcao)} por R$ ${precoAcao}`
        }
        const novoPortfolio = -quantidadeOperacao
        const valorOperacao = precoAcao * quantidadeOperacao
        dispatch('realizarOperacao', {
          mensagem,
          novoPortfolio,
          valorOperacao,
          indexAcao
        })
      } else {
        const mensagem = {
          tipo: 'compra',
          texto: `Você comprou ${Number(quantidadeOperacao)} ações de ${getters.getNomeAcao(indexAcao)} por R$ ${precoAcao}`
        }
        const novoPortfolio = +quantidadeOperacao
        const valorOperacao = -(precoAcao * quantidadeOperacao)
        dispatch('realizarOperacao', {
          mensagem,
          novoPortfolio,
          valorOperacao,
          indexAcao
        })
      }
    },
    async realizarOperacao({
      commit,
      getters
    }, operacao) {
      const saldoFinal = getters.getSaldo + operacao.valorOperacao
      const portfolioFinal = getters.getQuantidadePortfolio(operacao.indexAcao) + operacao.novoPortfolio
      const nomeAcao = getters.getNomeAcao(operacao.indexAcao)
      const respostaDB = await axios.put(`${getters.getConDB}portfolio/acoes/${nomeAcao}.json`,
        `${portfolioFinal}`
      ).then(await axios.put(`${getters.getConDB}portfolio/saldo.json`, saldoFinal))
      if (respostaDB.status == '200') {
        commit('addMensagem', operacao.mensagem)
        commit('setQuantidadeAcao', {
          indexAcao: operacao.indexAcao,
          portfolioFinal
        })
        commit('setSaldo', saldoFinal)
        // Zerar valor do input após conclusão da operação
        commit('setAOperar', {
          indexAcao: operacao.indexAcao,
          aOperar: 0
        })
      }
    },
    async variarAcao({
      commit
    }) {
      setInterval(() => {
        commit('setPrecoAleatorio')
      }, 2000)
    },
    async iniciarDados({
      commit,
      dispatch,
      getters
    }) {
      const acoes = {
        apple: 5,
        microsoft: 5,
        inter: 5,
        magalu: 5
      }
      const saldo = 10000
      await axios.put(getters.getConDB + 'portfolio.json', {
        acoes,
        saldo
      })
      const dadosIniciais = await axios.get(getters.getConDB + 'portfolio.json').then(resposta => resposta.data)

      const acoesInicias = Object.entries(dadosIniciais.acoes).map(acao => {
        return {
          nome: acao[0],
          quantidadePortfolio: acao[1],
          aOperar: 0,
          preco: 10
        }
      })  
      const saldoInicial = dadosIniciais.saldo
      commit('setPortfolio', acoesInicias)
      commit('setSaldo', saldoInicial)
      dispatch('calcularResultado')
      return true
    },
    calcularResultado({
      getters,
      commit
    }) {
      const acoes = Array.from(getters.getAcoes)
      const totalAcoes = acoes.map(acao => acao.preco*acao.quantidadePortfolio).reduce((preco1, preco2) => preco1 + preco2)
      const totalResultado = Number(Math.round((totalAcoes + getters.getSaldo)+ "e2") + "e-2")
      const resultadoLiquido = Number(Math.round((totalResultado - getters.getResultado) + "e2") + "e-2")
      const mensagemResultado = `Você terminou com resultado líquido de ${resultadoLiquido}`
      commit('addMensagem',{tipo: 'resultado',texto:mensagemResultado})
      commit('updateResultado', totalResultado)
    },
    async atualizarResultado({
      dispatch
    }) {
      setInterval(() => dispatch('calcularResultado'), 20000)
    }
  }
})