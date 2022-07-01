<template>
  <div class="container">
    <div class="history">
      <p>history</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "HistoryView"
}
</script>

<style scoped lang="scss">
  .history {
    margin-top: 90px;

    @media screen and (max-width: 767px) {
      margin-top: 15px;
      margin-right: 60px;
    }
  }
</style>
