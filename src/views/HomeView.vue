<template>
  <div class="container">
    <div class="home" v-if="url">
      <h2 class="text-center">{{ url ? 'Current Song' : 'Song is loading' }}</h2>
        <p class="text-center home__title">{{ title }}</p>
        <div class="home__player">
          <div>
            <template v-if="playing">
              <img @click="playCurrentVideo" class="home__player-btn" src="@/img/play-btn-playing.svg" alt="">
              <img @click="pauseCurrentVideo"  class="home__player-btn" src="@/img/pause-btn.svg" alt="">
            </template>
            <template v-else>
              <img @click="playCurrentVideo" class="home__player-btn" src="@/img/play-btn.svg" alt="">
              <img @click="pauseCurrentVideo"  class="home__player-btn" src="@/img/stop-btn-playing.svg" alt="">
            </template>
          </div>
        </div>
        <div class="home__yt">
          <div class="home__yt-iframe">
            <youtube-vue3 v-if="id"
                          ref="youtube"
                          class="home__yt-player"
                          :videoid="id"
                          :loop="0"
                          :autoplay="0" />
          </div>
        </div>
    </div>
    <div v-else class="loader-ring"></div>
  </div>

</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3'
import { nextTick } from 'vue'
import api from "@/helpers/api"
export default {
  name: 'HomeView',
  components: {
    YoutubeVue3
  },
  data () {
    return {
      url: '',
      id: '',
      title: '',
      resp: null,
      playing: false
    }
  },
  async mounted () {
    await this.getLastSong()
  },
  watch: {
    title (oldVal, newVal) {
      console.log('old', oldVal)
      console.log('new', newVal)
    }
  },
  methods: {
    async getLastSong () {
      try {
        const resp = await api.get('/history')
        await nextTick()
        this.url = resp.data.data[0].url
        this.title = resp.data.data[0].title
        this.extractVideoID(`${this.url}`)
      } catch (e) {
        console.log(e)
      }
    },
    playCurrentVideo () {
      this.$refs.youtube.player.playVideo()
      this.playing = true
    },
    pauseCurrentVideo () {
      this.$refs.youtube.player.pauseVideo()
      this.playing = false
    },
    extractVideoID (url) {
      // eslint-disable-next-line
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
      const match = url.match(regExp)
      if (match && match[7].length === 11) {
        this.id = match[7]
      } else {
        alert('Could not extract video ID.')
      }
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
