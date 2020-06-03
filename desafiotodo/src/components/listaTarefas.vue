<template>
  <div class="lista-tarefas-style">
     <p class="badge badge-danger">Teste</p><p class="badge badge-danger">Teste</p><p class="badge badge-danger">Ahoy</p><p class="badge badge-danger">Lol</p><p class="badge badge-danger">Teste</p><p class="badge badge-danger">Teste</p> <p class="badge badge-danger">Teste</p> <p class="badge badge-danger">Teste</p> <p class="badge badge-danger">Teste</p> <p class="badge badge-danger">TESTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEETESTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEETESTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEETESTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEETESTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p><p class="badge badge-danger">Teste</p> <p class="badge badge-danger">Teste</p> <p class="badge badge-danger">Teste</p> <p class="badge badge-danger">Teste</p> <p class="badge badge-danger">Teste</p> <p class="badge badge-danger">Teste</p> <p class="badge badge-danger">Teste</p> <p class="badge badge-danger">Teste</p> <p class="badge badge-danger">Teste</p> <p class="badge badge-danger">Teste</p>
     
  </div>
</template>

<script>
export default {
    name: "ListaTarefas"
}
</script>

<style lang="scss" scoped>
    .lista-tarefas-style{
        .badge{
            font-size: 3.2rem;
            border-radius: 12px;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            white-space: break-spaces;
            max-height: 10vh;
            line-height: 4.5vh;
        }
    }
</style>