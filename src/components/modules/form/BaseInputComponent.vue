<template>
  <div class="input">
    <label :class="{error: errors.length}"
           :for="id">
      {{ label }}</label>
    <input
      :type="type"
      :id="id"
      :value="value"
      :placeholder="placeholder"
      :class="{error: errors.length}"
      :maxlength="maxLength"
      @input="formatValue($event)"
    >
    <input-errors-component
      :errors="errors"
    ></input-errors-component>
  </div>
</template>

<script>
import InputErrorsComponent from "@/components/modules/form/InputErrorsComponent"
export default {
  name: "BaseInputComponent",
  components: {
    InputErrorsComponent
  },
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    value: String,
    placeholder: String,
    maxLength: String,
    errors: {
      type: Array,
      default: () => []
    },
    format: String
  },
  data () {
    return {

    }
  },
  methods: {
    formatValue ($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
