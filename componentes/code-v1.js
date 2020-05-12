//Registro Global
// Vue.component('contador', {

//     template: `
//         <div>
//             <span>{{valor}}</span>  
//             <button @click="valor++">+</button>
//             <button @click="valor--">-</button>
//         </div>
//     `,
//     data() {
//         return {
//             valor: 0
//         }
//     }

// })

const contador = {
    template: `
        <div>
            <span>{{valor}}</span>  
            <button @click="valor++">+</button>
            <button @click="valor--">-</button>
        </div>
    `,
    data(){
        return {
            valor: 0
        }
    }
}

new Vue({

    // Registro Local

    el: '#app1',
    components: {
        contador1: contador
    }
})

new Vue({

    // Registro Local

    el: '#app2',
    components: {
        'app-contador': contador
    }
})