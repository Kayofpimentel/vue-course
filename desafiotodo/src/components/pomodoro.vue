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
        <div class="pomo-timer"><p>25:00</p></div>
        <div class="pomo-control">
          <button class="btn-primary btn-lg button">Iniciar</button>
          <button class="btn-primary btn-lg button">Parar</button>
          <button class="btn-primary btn-lg button">Resetar</button>
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
  props: {}
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
      height: 60%;
      margin: auto;
      padding: 1vh 1vw ;
    }
  }
}
</style>>
