const jogo = new Vue({

    el: '#jogo-monstro',
    data: {
        iniciado: false,
        terminado: false,
        resultado: '',
        personagens: {
            mago: {
                classe: 'Mago', vida: 90, status: 'normal', acao: '',
                habilidades: {
                    primeira: { nome: 'Raio', efeito: { dano: [8, 14] }, tipo: 'ataque' },
                    segunda: { nome: 'Congelar', efeito: { paralisar: 1 }, tipo: 'assistencia', intervalo: 2 },
                    terceira: { nome: 'Bola de fogo', efeito: { dano: [20, 25] }, tipo: 'ataque', intervalo: -2 }
                }
            },
            guerreiro: {
                classe: 'Guerreiro', vida: 140, status: 'normal', acao: '',
                habilidades: {
                    primeira: { nome: 'Atacar', efeito: { dano: [6, 18] }, tipo: 'ataque' },
                    segunda: { nome: 'Girar', efeito: { danoArea: 10 }, tipo: 'ataque', intervalo: 1 },
                    terceira: { nome: 'Bandagem', efeito: { cura: [10, 25] }, tipo: 'assistencia', intervalo: 2 }
                }
            },
            goblin: {
                classe: 'Goblin', vida: 50, status: 'normal', acao: '',
                habilidades: {
                    primeira: { nome: 'Atacar', efeito: { dano: [4, 12] }, tipo: 'ataque' },
                    segunda: { nome: 'Bomba', efeito: { danoArea: 20 }, tipo: 'ataque' },
                }
            },
            ogre: {
                classe: 'Ogre', vida: 150, status: 'normal', acao: '',
                habilidades: {
                    primeira: { nome: 'Balançar', efeito: { danoArea: 15 }, tipo: 'ataque' },
                    segunda: { nome: 'Esmagar', efeito: { dano: [10, 20] }, tipo: 'ataque' },
                    terceira: { nome: 'Grito', efeito: { paralisar: 1 }, tipo: 'assistencia', uso: 1, intervalo: 1 }
                }
            }
        },
        aventureiros: { mago: null, guerreiro: null },
        monstros: { goblin: null, ogre: null },
        botaoIniciar: '',
        log: [[{ texto: 'Batalha iniciada', tipo: 'assistencia' }]]

    },
    computed: {
        preparar() {
            const vm = this
            vm.botaoIniciar = 'Preparar!'
            for (aventureiro in vm.aventureiros) {
                if (typeof (vm.aventureiros[aventureiro].acao.nome) === 'undefined') {
                    return false
                }
            }
            vm.botaoIniciar = 'Lutar!'
            return true
        },
    },
    watch: {
    },
    methods: {
        iniciar() {
            const vm = this
            vm.aventureiros.mago = _.cloneDeep(vm.personagens.mago)
            vm.aventureiros.guerreiro = _.cloneDeep(vm.personagens.guerreiro)
            vm.monstros.goblin = _.cloneDeep(vm.personagens.goblin)
            vm.monstros.ogre = _.cloneDeep(vm.personagens.ogre)
            vm.iniciado = true
        },
        reiniciar() {
            const vm = this
            vm.monstros = { goblin: null, ogre: null }
            vm.aventureiros = { mago: null, guerreiro: null }
            vm.iniciar()
            vm.terminado = false
            vm.resultado = ''
            vm.log = [[{ texto: 'Batalha iniciada', tipo: 'assistencia' }]]
        },
        desistir() {
            const vm = this
            vm.iniciado = false
            delete vm.monstros, vm.aventureiros
            vm.monstros = { goblin: null, ogre: null }
            vm.aventureiros = { mago: null, guerreiro: null }
            vm.resultado = ''
            vm.log = [[{ texto: 'Batalha iniciada', tipo: 'assistencia' }]]
        },
        lutar(event) {
            const vm = this
            turno = vm.log.length
            vm.log[turno] = []

            for (aventureiro in vm.aventureiros) {
                for (habilidade in vm.aventureiros[aventureiro].habilidades) {
                    if (typeof (vm.aventureiros[aventureiro].habilidades[habilidade].intervalo) !== 'undefined') {
                        vm.atualizarHabilidade(vm.aventureiros[aventureiro].habilidades[habilidade])
                    }
                }
            }
            if (vm.botaoIniciar.localeCompare('Preparar!') == 0) {
                event.stopPropagation()
            }
            else {
                
                for (aventureiro in vm.aventureiros) {
                    vm.resolverAcao(vm.aventureiros[aventureiro], true, turno)
                }
                for (monstro in vm.monstros) {
                    vm.acoesMonstros()
                    vm.resolverAcao(vm.monstros[monstro], false, turno)
                }
                if (Object.keys(vm.aventureiros).length === 0) {
                    vm.resultado = 'Derrota'
                    vm.terminado = true
                }
                else {
                    if (Object.keys(vm.monstros).length === 0) {
                        vm.resultado = 'Vitória'
                        vm.terminado = true
                    }
                    else {

                        for (aventureiro in vm.aventureiros) {
                            vm.aventureiros[aventureiro].acao = 'nenhum'
                        }
                        for (monstro in vm.monstros) {
                            vm.monstros[monstro].acao = 'nenhum'
                        }
                    }
                }
            }
        },
        acoesAventureiros(acao, classe) {
            const vm = this
            vm.aventureiros[classe].acao = acao
        },
        acoesMonstros() {
            const vm = this
            let perfilGoblin
            let acaoGoblin
            let perfilOgre
            let acaoOgre
            if (typeof (vm.monstros.goblin) !== 'undefined') {
                perfilGoblin = vm.monstros.goblin
                acaoGoblin = perfilGoblin.vida >= 35
                    ? perfilGoblin.habilidades.primeira : perfilGoblin.habilidades.segunda
                vm.monstros.goblin.acao = acaoGoblin
            }
            if (typeof (vm.monstros.ogre) !== 'undefined') {
                perfilOgre = vm.monstros.ogre
                if (typeof (perfilOgre.acao.nome) === 'undefined') {
                    if (perfilOgre.vida <= 75 && vm.checarHabilidade(perfilOgre.habilidades.terceira)) {
                        acaoOgre = perfilOgre.habilidades.terceira
                    }
                    else {
                        acaoOgre = perfilOgre.vida <= 75
                            ? perfilOgre.habilidades.primeira : perfilOgre.habilidades.segunda
                    }
                    vm.monstros.ogre.acao = acaoOgre
                }
            }

        },
        resolverAcao(personagem, isAventureiro, turno) {
            const vm = this
            if (personagem.status == 'normal') {
                let acao = personagem.acao
                acao.intervalo = acao.intervalo > 0 ? acao.intervalo - 1 : acao.intervalo
                acao.uso = acao.uso > 0 ? acao.uso - 1 : acao.uso
                if (acao.tipo == 'ataque') {
                    vm.dano(acao.efeito, isAventureiro, turno)
                }
                else {
                    if (acao.tipo == 'assistencia') {
                        vm.efeito(acao.efeito, isAventureiro, turno)
                    }
                }
            }
            else {
                personagem.status = 'normal'
            }
        },
        dano(dmgData, isAventureiro, turno) {
            const vm = this
            let danoAtaque
            let alvos = isAventureiro ? vm.monstros : vm.aventureiros
            if (Object.keys(alvos).length > 0) {
                if (typeof (dmgData.danoArea) !== 'undefined') {
                    danoAtaque = dmgData.danoArea
                    for (alvo in alvos) {
                        if (alvos[alvo].vida <= danoAtaque) {
                            let logAcoes = { texto: alvo + ' morreu com um ataque de ' + danoAtaque + ' de dano!', tipo: 'ataque' }
                            vm.log[turno].push(logAcoes)
                            delete alvos[alvo]
                        }
                        else {
                            alvos[alvo].vida -= danoAtaque
                            let logAcoes = { texto: alvo + ' recebeu um ataque de ' + danoAtaque + ' de dano!', tipo: 'ataque' }
                            vm.log[turno].push(logAcoes)
                        }

                    }
                }
                else {
                    let tamanhoGrupo = Object.keys(alvos).length - 1
                    let chanceAlvo = tamanhoGrupo > 0 ? Math.round(tamanhoGrupo - tamanhoGrupo * Math.random()) : 0
                    let alvo = Object.keys(alvos)[chanceAlvo]
                    danoAtaque = Math.round(dmgData.dano[1] - (dmgData.dano[1] - dmgData.dano[0]) * Math.random())
                    console.log(danoAtaque + ' em ' + alvo)
                    if (alvos[alvo].vida <= danoAtaque) {
                        let logAcoes = { texto: alvo + ' morreu com um ataque de ' + danoAtaque + ' de dano!', tipo: 'ataque' }
                        vm.log[turno].push(logAcoes)
                        delete alvos[alvo]
                    }
                    else {
                        alvos[alvo].vida -= danoAtaque
                        let logAcoes = { texto: alvo + ' recebeu um ataque de ' + danoAtaque + ' de dano.', tipo: 'ataque' }
                        vm.log[turno].push(logAcoes)
                    }
                }


            }
        },
        efeito(efeito, isAventureiro, turno) {
            const vm = this
            if (typeof (efeito.paralisar) !== "undefined") {
                let alvos = isAventureiro ? vm.monstros : vm.aventureiros
                for (alvo in alvos) {
                    alvos[alvo].status = "paralisado"
                    let logAcoes = { texto: alvo + ' foi paralisado!', tipo: 'assistencia' }
                    vm.log[turno].push(logAcoes)
                }
            }
            else {
                let alvos = vm.aventureiros
                for (alvo in alvos) {
                    cura = Math.round(efeito.cura[1] - (efeito.cura[1] - efeito.cura[0]) * Math.random())
                    alvos[alvo].vida += cura
                    let logAcoes = { texto: alvo + ' foi curado por ' + cura + '.', tipo: 'assistencia' }
                    vm.log[turno].push(logAcoes)
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
                        padrao = vm.personagens[personagem].habilidades[habilidadePadrao]
                    }
                }
            }
            if (typeof (habilidade) != 'string') {
                if (habilidade.uso < 1 || habilidade.intervalo < padrao.intervalo || habilidade.intervalo < 0) {
                    usavel = false
                }
            }
            return usavel
        },
        atualizarVidaAventureiros(classe) {
            const vm = this
            vidaTirada = Math.abs(vm.personagens[classe].vida - vm.aventureiros[classe].vida)
            barra = ((20 / vm.personagens[classe].vida) * vidaTirada) + 7.5
            return '1vh ' + barra + 'vw 0vh 7.5vw'
        },
        atualizarVidaMonstros(classe) {
            const vm = this
            vidaTirada = Math.abs(vm.personagens[classe].vida - vm.monstros[classe].vida)
            barra = ((20 / vm.personagens[classe].vida) * vidaTirada) + 7.5
            return '1vh ' + barra + 'vw 0vh 7.5vw'
        },
        atualizarHabilidade(habilidade) {
            const vm = this
            let padrao
            for (personagem in vm.personagens) {
                for (habilidadePadrao in vm.personagens[personagem].habilidades) {
                    if (vm.personagens[personagem].habilidades[habilidadePadrao].nome.localeCompare(habilidade.nome) === 0) {
                        padrao = vm.personagens[personagem].habilidades[habilidadePadrao]
                    }
                }
            }
            if (habilidade.intervalo === 0) {
                habilidade.intervalo = padrao.intervalo
            }
            else{
                if (habilidade.intervalo > 0 && habilidade.intervalo < padrao.intervalo){
                    habilidade.intervalo -= 1
                }
                if(habilidade.intervalo < 0){
                    habilidade.intervalo += 1
                }      
            } 
        }
    }
})



