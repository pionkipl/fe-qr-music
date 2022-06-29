<template>
  <div class="container">
    <div class="home">
      <p>home</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped lang="scss">
  .home {
    margin-top: 76px;

    @media screen and (max-width: 767px) {
      margin-top: 15px;
    }
  }
</style>
