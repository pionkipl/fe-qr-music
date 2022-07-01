<template>
  <div class="container">
    <div class="form">
      <h2 class="text-center mb-5">Add song</h2>
      <form class="form-content" @submit.prevent="addSong">
        <div class="row">
          <div class="col-12">
            <base-input-component
              id="title"
              label="Song title"
              placeholder="Type song title"
              v-model="form.name"
              :errors="errors('title')">
            </base-input-component>
          </div>
          <div class="col-12">
            <base-input-component
              id="videoId"
              label="Video id"
              placeholder="Type youtube video id"
              v-model="form.name"
              :errors="errors('videoId')">
            </base-input-component>
          </div>
          <div class="col-12">
            <div class="d-flex justify-content-center">
              <button type="submit" class="button"><span v-if="isSending" class="loader-ring"></span><span :style="{opacity: !isSending ? '1' : '0'}">Send</span></button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInputComponent from "@/components/modules/form/BaseInputComponent"

import api from '@/helpers/api.js'

export default {
  name: "FormView",
  components: {
    BaseInputComponent
  },
  data () {
    return {
      form: {
        title: '',
        videoId: ''
      },
      response: null,
      isSending: false
    }
  },
  methods: {
    async addSong () {
      try {
        if (!this.isSending) {
          this.isSending = true
          const resp = await api.post('add', this.form)

          this.response = {
            success: true,
            data: resp.data
          }
          this.resetForm()
          this.isSending = false
        }
      } catch (e) {
        this.response = {
          success: false,
          data: e.response.data
        }
        this.scrollToFirstError()
      }
      this.isSending = true
    },
    resetForm () {
      this.form.title = ''
      this.form.videoId = ''
    },
    errors (field) {
      try {
        return this.response.data.errors[field]
      } catch (e) {
        return []
      }
    },
    scrollToFirstError () {
      this.$nextTick(() => {
        const domRect = document.querySelector('.error').getBoundingClientRect()
        window.scrollTo(
          domRect.left + document.documentElement.scrollLeft,
          domRect.top + document.documentElement.scrollTop - 150
        )
      })
    }
  }
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

  .form-content {
    max-width: 600px;
    background-color: #fff;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 3px #000;
  }
</style>
