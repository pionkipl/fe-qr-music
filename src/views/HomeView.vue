<template>
  <div class="container">
    <div class="home">
      <h2 class="text-center">{{ url ? 'Current Song' : 'Song is loading' }}</h2>
      <template v-if="url">
        <p class="text-center home__title">Text</p>
        <div class="home__player">
          <div>
            <img @click="playCurrentVideo" class="home__player-btn" src="@/img/play-btn.svg" alt="">
            <img @click="pauseCurrentVideo"  class="home__player-btn" src="@/img/pause-btn.svg" alt="">
          </div>
        </div>
        <div class="home__yt">
          <div class="home__yt-iframe">
            <youtube-vue3 @ready="myFunc"
                          ref="youtube"
                          class="home__yt-player"
                          :videoid="url"
                          :loop="0"
                          :autoplay="1" />
          </div>
        </div>
      </template>
      <div v-else class="loader-ring"></div>

    </div>
  </div>

</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3'
export default {
  name: 'HomeView',
  components: {
    YoutubeVue3
  },
  data () {
    return {
      url: 'jwMG9wlhc84'
    }
  },
  mounted () {
    // this.playCurrentVideo()
  },
  methods: {
    myFunc () {
      console.log('ready')
    },
    playCurrentVideo () {
      this.$refs.youtube.player.playVideo()
    },
    pauseCurrentVideo () {
      this.$refs.youtube.player.pauseVideo()
    }
  }
}
</script>

<style scoped lang="scss">
  .home {
    margin-top: 90px;

    @media screen and (max-width: 767px) {
      margin-top: 15px;
      margin-right: 60px;
    }

    &__title {
      font-size: 3rem;
      margin: 35px auto 20px auto;
    }

    &__player {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background-color: rgba(255,255,255, 0.5);
      border-radius: 10px;
      box-shadow: 2px 2px 3px #000;
      color: $color-redish;
      width: 100%;
      max-width: 300px;
      margin: 30px auto;
      padding: 20px 10px;
    }

    &__player-btn {
      width: 45px;
      margin: 10px;
      cursor: pointer;
    }

    &__yt {
      margin-top: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      overflow: hidden;
      //padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
    }

    &__yt-iframe {
      width: 0;
      height: 0;
      opacity: 0;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

      }
    }
  }
</style>
