<template>
  <div class="container">
    <div class="history">
      <h2 class="text-center mb-5">History songs</h2>
      <div class="history__list-container">
        <ul class="history__list">
          <li class="history__list-item" v-for="(song, i) in history" :key="i">
            <p>{{ i + 1 }}.</p>
            <p>{{ song.title }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "HistoryView",
  data () {
    return {
    }
  },
  mounted () {

  },
  computed: {
    ...mapState({
      history: state => state.songs.songs
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
