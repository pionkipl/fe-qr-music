<template>
  <div class="container">
    <div class="form">
      <p>form</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "FormView"
}
</script>

<style scoped lang="scss">
  .form {
    margin-top: 90px;

    @media screen and (max-width: 767px) {
      margin-top: 15px;
      margin-right: 60px;
    }
  }
</style>
