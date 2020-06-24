<template>
  <div class="pomo-style container-fluid">
    <div class="row row-cols-3 no-gutters">
      <div class="col col-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Ad Space</h5>
            <h6 class="card-subtitle mb-2 text-muted">Insert your add</h6>
            <p class="card-text">Here you can insert your add.</p>
            <a href="https://disruptive.house" class="card-link">Disruptive</a>
            <a href="https://kayofernandes.com.br" class="card-link">Kayo's Projects</a>
          </div>
        </div>
      </div>
      <div class="col col-6">
        <div class="pomo-timer"><p>{{minutes+':'+seconds}}</p></div>
        <div class="pomo-control">
          <button class="btn-primary btn-lg button" @click="startTimer">Iniciar</button>
          <button class="btn-primary btn-lg button" @click="stopTimer">Parar</button>
          <button class="btn-primary btn-lg button" @click="resetTimer">Resetar</button>
        </div>
      </div>
      <div class="col col-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Ad Space</h5>
            <h6 class="card-subtitle mb-2 text-muted">Insert your add</h6>
            <p class="card-text">Here you can insert your add.</p>
            <a href="https://disruptive.house" class="card-link">Disruptive</a>
            <a href="https://kayofernandes.com.br" class="card-link">Kayo's Projects</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pomodoro",
  props: {},
  data() {
    return{
      time: 1500000,
      timer: false
    }
  },
  methods:{
    startTimer(){
      const vm = this
      if(!vm.timer){
        vm.timer = setInterval(function(){
          vm.time -= 1000
          }, 1000)
      }
    },
      stopTimer(){
        const vm = this
        clearInterval(vm.timer)
        vm.timer = false
      },
      resetTimer(){
        const vm = this
        vm.stopTimer()
        vm.time = 1500000
      }
    
  },
  computed:{
    minutes(){
      const vm = this
      let minute = Math.trunc(vm.time/60000)
      return minute <= 10 ? '0'+minute : minute
    },
    seconds(){
      const vm = this
      let second = (vm.time - (vm.minutes * 60000))/1000
      return second <= 10 ? '0'+second : second
    }
  },
  watch:{
    time: function(){
      const vm = this
      if(vm.time === 0){
        vm.stopTimer()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pomo-style {
  .row {
    .col {
      height: inherit;

      .card *{
        font-size: 1.8rem;
      }
    }
  }
  .pomo-timer{
    max-height: 60%;
    height: 60%;
    p{
      height: 100%;
      font-size: 5rem;
    }
  }
  .pomo-control{
    height: 40%;
    max-height: 40%;
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;

    button{
      min-width: 7vw;
      margin: 1vh 2vw;
      background-color: var(--secondary);
      border-color: var(--primary);
      color: #2c3e50;
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
}
</style>>
