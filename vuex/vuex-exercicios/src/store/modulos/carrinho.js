export default {
    namespaced: true,
    state: {
        produtos: [],
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(el => el.quantidade * el.preco).reduce((el1, el2) => el1 + el2, 0)
        }
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        },
    },
    actions: {
        adicionarProdutoAsync: {
            root: true,
            handler( /*context*/ {
                commit
            }, payload) {
                setTimeout(() => {
                    // context.commit('adicionarProduto',payload)
                    commit('adicionarProduto', payload)
                }, 1000)
            }
        }
    },
}