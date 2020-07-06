<template>
  <div>
      <ul >
          <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
      </ul>
      <div>
          <input type="text" v-model="fruta" @keydown.enter="add">
      </div>
      
  </div>
  
</template>

<script>
import frutasMixin from './frutasMixin.js'

export default {
    name: 'Frutas',
    mixins: [frutasMixin],
    created(){
        console.log('Testando Frutas!')
    }
}
</script>

<style>
    li{
        font-size: 2rem;
        text-align: left;
        margin: 1vh auto;
    }
    ul{
        margin: 0;
    }
    div{
        text-align: left;
        margin: 1vh 0;
    }
    input{
        margin: auto;
    }
</style>