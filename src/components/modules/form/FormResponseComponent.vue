<template>
  <div
    v-if="JSON.stringify(response) !== '{}'"
    class="fw700 text-center mt-4"
  >
    <template v-if="response.status === 500">
      <p class="mb-0 resp err">Something went wrong, try again later.</p>
    </template>
    <template v-if="response.status === 200">
      <p class="mb-0 resp">{{ message }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "FormResponseComponent",
  props: {
    response: Object
  },
  computed: {
    message: function () {
      try {
        return this.response.data.message || ''
      } catch {
        return ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .resp {
    background-color: #32B4FD;
    padding: 15px 30px;
    border-radius: 15px;
    color: #fff;

    &.err {
        background-color: #A74FA2;
     }
  }
</style>
