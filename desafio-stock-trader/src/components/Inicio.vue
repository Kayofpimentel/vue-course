<template>
  <div id="inicio">
    <h1 class="badge">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#inicio{
  text-align: left;
}
a {
  color: #42b983;
}
</style>
