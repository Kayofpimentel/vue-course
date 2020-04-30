const vm1 = new Vue({

    el: '#app1',
    data: {
        titulo1: 'Instância 1'
    },
    methods: {

        alterar() {
            vm2.titulo2 += '!!!'
        }

    }

})


const vm2 = new Vue({

    el: '#app2',
    data: {
        titulo2: 'Instância 2'
    },
    methods: {

        alterar() {
            vm1.titulo1 += '???'
        }

    }

})


setTimeout(() => {
    vm1.titulo1 = 'Alterado pelo timer.'
}, 2000)

function MeuVue(params) {
    this.$el = document.querySelector(params.el)
    this.$data = params.data

    for (let atr in this.$data) {
        Object.defineProperty(this, atr, {
                get: () => {
                    return this.$data[atr]
                },
                set: value => {
                    this.$data[atr] = value
                }
            }

        )
    }

    //interpolar
    const regex = /{{([\s\w+*-/]*)}}/g
    this.$el.innerHTML = this.$el.innerHTML.replace(regex, (match, $1) => {
        const value = this[$1.trim()]
        return value ? value : eval($1)
    })

}

const meuVm = new MeuVue({

    el: '#meuApp',
    data: {
        nome: 'Maria',
        sobrenome: 'Silva'
    }

})

console.log(meuVm.nome)
console.log(meuVm.$data.nome)
meuVm.nome = 'Pedro'

console.log(meuVm.nome)


const vm3 = new Vue({

    el: '#app3',
    data: {
        titulo: '$el , $data e $refs',
        teste: 'Teste',
        referencia: 'Referencia'
    },
    methods: {
        alterar() {
            this.teste += '!!!'
        },
        alterarRef() {
            this.referencia += '#'
        }
    }

})

vm3.$refs.referenciando.innerText = 'Alterando a referência'


const vm4 = new Vue({

    //el: '#app4',
    template: `
    <section class="half-page">
        <h2>{{titulo}}</h2>
        <p>{{teste}}</p>
    </section>
    `,

    data: {
        titulo: 'Template',
        teste: 'Testando template',
    },
    methods: {
        alterar() {
            this.teste += '!!!'
        },
        alterarRef() {
            this.referencia += '#'
        }
    }

})

vm4.$mount('#app4')


Vue.component('comp5', {

    template: `
        <div>
            <h2>{{titulo}}</h2>
            <p>{{teste}}</p>
            <button @click="alterar">Alterar componente</button>
        </div>
    `,
    data: function () {

        return {
            titulo: 'Componentes',
            teste: 'Teste de componentes'
        }
    },
    methods: {
        alterar(){
            this.teste += '##'
        }
    }
        
})

const vm5 = new Vue({

    el: '#app5'

})



new Vue({

    el: '#app6',
    data: {
        titulo: 'Ciclo de Vida'
    },
    created(){
        console.log('Criado.')
    },
    mounted(){
        console.log('Montado.')
    },
    beforeUpdate(){
        console.log('Atualizando.')
    },
    updated(){
        console.log('Atualizado.')
    },
    beforeDestroy(){
        console.log('Destruindo.')
    },
    destroyed(){
        console.log('Destruído.')
    }

})