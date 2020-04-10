const jogo = new Vue({

    el: '#jogo-monstro',
    data: {
        iniciado: false,
        personagens: {
            mago: {
                classe: 'Mago', vida: 90, status: 'normal', acao: '',
                habilidades: {
                    primeira: { nome: 'Raio', efeito: { dano: [8, 14] }, tipo: 'ataque', turnos: 1, intervalo: 0, uso: 'inf' },
                    segunda: { nome: 'Congelar', efeito: { paralisar: 1 }, tipo: 'assistencia', turnos: 1, intervalo: 0, uso: 'inf' },
                    terceira: { nome: 'Bola de fogo', efeito: { dano: 25 }, tipo: 'ataque', turnos: 1, intervalo: -2, uso: 'inf' }
                }
            },
            guerreiro: {
                classe: 'Guerreiro', vida: 140, status: 'normal', acao: '',
                habilidades: {
                    primeira: { nome: 'Atacar', efeito: { dano: [6, 18] }, tipo: 'ataque', turnos: 1, intervalo: 0, uso: 'inf' },
                    segunda: { nome: 'Defender', efeito: { bloqueio: 1 }, tipo: 'defesa', turnos: 1, intervalo: 0, uso: 'inf' },
                    terceira: { nome: 'Bandagem', efeito: { cura: [10, 25] }, tipo: 'assistencia', turnos: 1, intervalo: 2, uso: 'inf' }
                }
            },
            goblin: {
                classe: 'Goblin', vida: 50, status: 'normal', acao: '',
                habilidades: {
                    primeira: { nome: 'Atacar', efeito: { dano: [4, 12] }, tipo: 'ataque', turnos: 1, intervalo: 0, uso: 'inf' },
                    segunda: { nome: 'Bomba', efeito: { danoArea: [20] }, tipo: 'ataque', turnos: 1, intervalo: 0, uso: 'inf' },
                }
            },
            ogre: {
                classe: 'Ogre', vida: 150, status: 'normal', acao: '',
                habilidades: {
                    primeira: { nome: 'Balançar', efeito: { danoArea: [6, 18] }, tipo: 'ataque', turnos: 1, intervalo: 0, uso: 'inf' },
                    segunda: { nome: 'Esmagar', efeito: { dano: [4, 12] }, tipo: 'ataque', turnos: 2, intervalo: 0, uso: 'inf' },
                    terceira: { nome: 'Grito', efeito: { paralisar: 1 }, tipo: 'assistencia', turnos: 1, intervalo: 0, uso: 1 }
                }


            }
        },
        aventureiros: { mago: null, guerreiro: null },
        monstros: { goblin: null, ogre: null },
        preparado: '',
        log: [[{ texto: 'Batalha iniciada', tipo: 'assistencia' }]]

    },
    computed: {
        preparar() {
            const vm = this
            if (typeof (vm.aventureiros.mago.acao.nome) !== 'undefined' && typeof (vm.aventureiros.guerreiro.acao.nome) !== 'undefined') {
                vm.preparado = 'Lutar!'
                return true
            }
            vm.preparado = 'Preparar!'
            return false
        },
    },
    watch: {
    },
    methods: {
        iniciar() {
            const vm = this
            vm.aventureiros.mago = Object.assign({}, vm.personagens.mago)
            vm.aventureiros.guerreiro = Object.assign({}, vm.personagens.guerreiro)
            vm.monstros.goblin = Object.assign({}, vm.personagens.goblin)
            vm.monstros.ogre = Object.assign({}, vm.personagens.ogre)
            vm.iniciado = !vm.iniciado
        },
        lutar(event) {
            const vm = this
            let logAcoes
            if (vm.preparado.localeCompare('Preparar!') == 0) {
                event.stopPropagation()
            }
            else {
                vm.acoesMonstros()

                for (aliado in vm.aventureiros) {
                    vm.resolverAcao(aliado, true)
                }
                for (inimigo in vm.monstros) {
                    vm.resolverAcao(inimigo, false)
                }
                logAcoes = [{ texto: 'Turno 1', tipo: 'ataque' }]
                vm.log.push(logAcoes)
                vm.aventureiros.mago.acao = 'nenhum'
                vm.aventureiros.guerreiro.acao = 'nenhum'
                vm.monstros.goblin.acao = 'nenhum'
                vm.monstros.ogre.acao = 'nenhum'
            }

        },
        acoesAventureiros(acao, classe) {
            const vm = this
            vm.aventureiros[classe].acao = acao
        },
        dano(dmgData) {
            const vm = this

        },
        acoesMonstros() {
            const vm = this
            let perfilGoblin = vm.monstros.goblin
            let perfilOgre = vm.monstros.ogre
            let acaoGoblin = perfilGoblin.vida <= 35
                ? perfilGoblin.habilidades.primeira : perfilGoblin.habilidades.segunda
            vm.monstros.goblin.acao = acaoGoblin
            if (typeof (perfilOgre.acao.nome) !== 'undefined') {
                if (perfilOgre.vida <= 75 && checarHabilidade(perfilOgre.habilidades.terceira)) {
                    acaoOgre = perfilOgre.habilidades.terceira
                    acaoOgro.habilidades.terceira.uso -= 1
                }
                else {
                    acaoOgre = perfilOgre.vida <= 75
                        ? perfilOgre.habilidades.primeira : perfilOgre.habilidades.segunda
                }
                vm.monstros.ogre.acao = acaoOgre
            }
        },
        atualizarVidaAventureiros(classe) {
            const vm = this
            vidaPersonagem = Math.abs(vm.personagens[classe].vida - vm.aventureiros[classe].vida)
            barra = ((20 / vm.personagens[classe].vida) * vidaPersonagem) + 7.5
            return '1vh ' + barra + 'vw 0vh 7.5vw'
        },
        atualizarVidaMonstros(classe) {
            const vm = this
            vidaPersonagem = Math.abs(vm.personagens[classe].vida - vm.monstros[classe].vida)
            barra = ((20 / vm.personagens[classe].vida) * vidaPersonagem) + 7.5
            return '1vh ' + barra + 'vw 0vh 7.5vw'
        },
        resolverAcao(personagem, isAliado) {
            const vm = this
            if (isAliado && personagem.status == 'normal') {
                acaoAliado = personagem.acao
                if (acaoAliado.tipo == 'ataque') {
                    alvo = Math.random()
                    if ((Math.round(alvo) == 0 && typeof(vm.monstros.goblin) !== 'undefined' )
                     || typeof(vm.monstros.ogre) === 'undefined') {
                        vm.dano(acaoAliado.efeito, vm.monstros.goblin)
                    }

                }
            }
        },
        checarHabilidade(habilidade) {
            const vm = this
            let usavel = true
            let padrao
            for (personagem in vm.personagens) {
                for (habilidadePadrao in vm.personagens[personagem].habilidades) {
                    if (vm.personagens[personagem].habilidades[habilidadePadrao].nome.localeCompare(habilidade.nome) === 0) {
                        padrao = habilidadePadrao
                    }
                }
            }
            if (typeof (habilidade) != 'string') {
                if (habilidade.uso < 1 || habilidade.intervalo < 0 || habilidade.intervalo < padrao.intervalo) {
                    usavel = false
                }
            }
            return usavel
        }
    }
})
