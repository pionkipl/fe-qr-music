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
              v-model="form.title"
              :errors="errors('title')">
            </base-input-component>
          </div>
          <div class="col-12">
            <base-input-component
              id="videoId"
              label="Youtube video url"
              placeholder="Type youtube video url"
              v-model="form.videoUrl"
              :errors="errors('videoUrl')">
            </base-input-component>
          </div>
          <div class="col-12">
            <div class="d-flex justify-content-center">
              <button type="submit" class="button"><span v-if="isSending" class="loader-ring"></span><span :style="{opacity: !isSending ? '1' : '0'}">Send</span></button>
            </div>
          </div>
          <div class="col-12">
            <div class="d-flex justify-content-center">
              <form-response-component :response="response"></form-response-component>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInputComponent from "@/components/modules/form/BaseInputComponent"
import FormResponseComponent from "@/components/modules/form/FormResponseComponent"

import api from '@/helpers/api.js'

export default {
  name: "FormView",
  components: {
    BaseInputComponent,
    FormResponseComponent
  },
  data () {
    return {
      form: {
        title: '',
        videoUrl: ''
      },
      errorsList: {},
      isSending: false,
      response: {}
    }
  },
  methods: {
    async addSong () {
      try {
        if (!this.isSending) {
          this.isSending = true
          const resp = await api.post('add', this.form)
          this.response = resp
          setTimeout(() => {
            this.response = {}
          }, 5000)
          this.resetForm()
          this.$store.dispatch('getSongs')
        }
      } catch (e) {
        console.log('e', e)
        this.errorsList = e.response.data.errors
        this.response = e.response
        this.isSending = false
      }
      this.isSending = false
    },
    resetForm () {
      this.form.title = ''
      this.form.videoUrl = ''
      this.errorsList = {}
    },
    errors (field) {
      return this.errorsList[field] || {}
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
