<template>
  <div class="footer-style">
    <div class="footer-msg">
      <p>Keep up</p>
      <p>the good work!</p>
    </div>
    <div>
      <img src="../assets/logo.png" alt="Logo do footer" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-style {
  div {
    display: inline-block;
    vertical-align: middle;
  }

  img {
    max-height: 8vh;
  }

  .footer-msg {
    font-size: 2rem;
    p {
      margin: 0.5vh 1vw 0.8vh 0;
      padding: 0;
    }
  }
}
</style>