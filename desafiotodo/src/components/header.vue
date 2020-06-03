<template>
  <div class="header-style">
    <h1>Let's TODO</h1>
    <div class="logo-holder">
      <img alt="TODO app logo" src="../assets/logo.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    imgSrc: String
  }
};
</script>

<style lang="scss" scoped>
.header-style {
  .logo-holder {
    max-height: 9vh;

    img {
      object-fit: cover;
      max-height: inherit;
    }
  }
  h1 {
    font-size: 4.2rem;
    font-weight: 500;
    margin: 0 0 0 0;
  }
}
</style>