<template>
  <div class="container">
    <div class="history">
      <h2 class="text-center mb-5">History logs</h2>
      <div class="history__list-container">
        <ul class="history__list">
          <li class="history__list-item" v-for="(log, i) in history" :key="i">
            <p>{{ i + 1 }}.</p>
            <p>{{ log.date }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapState } from "vuex"

export default {
  name: "ElectricityView",
  computed: {
    formattedDates (date) {
      return dayjs(date).format('YYYY-MM-DDTHH:mm:ss')
    },
    ...mapState({
      history: state => state.electricity.logs
    })
  }
}
</script>

<style scoped lang="scss">
.history {
  margin-top: 90px;

  @media screen and (max-width: 767px) {
    margin-top: 15px;
    margin-right: 60px;
  }

  &__list-container {
    max-width: 600px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 2px 2px 3px #000;
    position: relative;
  }

  &__list {
    padding: 0;
    list-style-type: none;
    max-height: 70vh;
    height: 100%;
    overflow-y: auto;
  }

  &__list-item {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    font-weight: 700;

    &:nth-child(even) {
      background-color: $color-third;
      color: #fff;
    }

    p {
      font-size: 2rem;
      margin-bottom: 0;
    }
  }
}
</style>
