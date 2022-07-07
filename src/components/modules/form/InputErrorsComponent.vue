<template>
  <div v-if="JSON.stringify(errors) !== '{}'" class="errors">
    {{ errors['msg'] }}
  </div>
</template>

<script>
export default {
  name: "InputErrorsComponent",
  props: {
    errors: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
