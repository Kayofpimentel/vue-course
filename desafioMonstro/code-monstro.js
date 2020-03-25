const jogo = new Vue({

    el: '#jogo-monstro',
    data: {
        iniciado: false,
        personagens: {
            mago: {
                classe: "Mago", vida: 90,
                habilidades: {
                    primeira: { nome: "Raio", efeito: { dano: [8, 14] }, tipo: "ataque", turnos: 1, intervalo: 0},
                    segunda: { nome: "Congelar", efeito: { paralisar: 1 }, tipo: "assistencia", turnos: 1, intervalo: 0},
                    terceira: { nome: "Bola de fogo", efeito: { dano: 25 }, tipo: "ataque", turnos: 1, intervalo: -2}
                }
            },
            guerreiro: {
                classe: "Guerreiro", vida: 140,
                habilidades: {
                   primeira: { nome: "Atacar", efeito: { dano: [6, 18] }, tipo: "ataque", turnos: 1, intervalo: 0},
                   segunda: { nome: "Defender", efeito: { bloqueio: 1 }, tipo: "defesa", turnos: 1, intervalo: 0},
                   terceira: { nome: "Bandagem", efeito: { cura: [10, 25] }, tipo: "assistencia", turnos: 1, intervalo: 2}
                }
            },
            goblin: {
                classe: "Goblin", vida: 50,
                habilidades: {
                   primeira: { nome: "Atacar", efeito: { dano: [4, 12] }, tipo: "ataque", turnos: 1, intervalo: 0 },
                   segunda: { nome: "Bomba", efeito: { danoArea: [30] }, tipo: "ataque", turnos: 1, intervalo: 2 },
                }
            },
            ogre: {
                classe: "Ogre", vida: 150,
                habilidades: {
                    primeira: { nome: "Balançar", efeito: "danoArea([6, 18])", tipo: "ataque", turnos: 1, intervalo: 0 },
                    segunda: { nome: "Esmagar", efeito: "dano([15, 35], 2)", tipo: "ataque", turnos: 2, intervalo: 0 },
                    terceira: { nome: "Grito", efeito: "paralisar()", tipo: "assistencia", turnos: 1, intervalo: -2 }
                }


            }
        },
        aliados: {},
        inimigos: {},
        acoes: {mago: {nome: 'nenhum'}, guerreiro: {nome: 'nenhum'}, goblin: {nome: 'nenhum'}, ogre: {nome: 'nenhum'}},
        preparado: 'Preparar!'
    },
    computed: {
        preparar(){
            const vm = this
           if(vm.acoes.mago.nome.localeCompare('nenhum') != 0 && vm.acoes.guerreiro.nome.localeCompare('nenhum') != 0){
               
               return ''
           }
           return 'preparando'
        }
    },
    watch: {
        preparar(){
            const vm = this
            vm.preparado = 'Lutar!'
        }
    },
    methods: {
        iniciar() {
            const vm = this
            vm.aliados['mago'] = vm.personagens.mago
            vm.aliados['guerreiro'] = vm.personagens.guerreiro
            vm.inimigos['goblin'] = vm.personagens.goblin
            vm.inimigos['ogre'] = vm.personagens.ogre
            vm.iniciado = !vm.iniciado
        },
        lutar() {
            const vm = this
            vm.preparado = 'Preparar!'
        },
        adicionarAcao(acao, classe) {
            const vm = this
            vm.acoes[classe] = acao
            
        },
        dano(...dmgData) {
            const vm = this
        }
    }
})
