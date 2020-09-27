export default{
  state: {
    quantidade: 1,
    preco: 25,
  },
  mutations: {
    setQuantidade(state, payload){
      state.quantidade = payload
    },
    setPreco(state, payload){
      state.preco = payload
    }
  },
}