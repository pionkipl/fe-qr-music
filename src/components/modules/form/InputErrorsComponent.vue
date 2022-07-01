<template>
  <div v-if="errors.length" class="errors">
    <div v-for="(error, index) in errors" :key="index">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: "InputErrorsComponent",
  props: {
    errors: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
