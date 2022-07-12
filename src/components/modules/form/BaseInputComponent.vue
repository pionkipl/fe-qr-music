<template>
  <div class="input">
    <label :class="{error: JSON.stringify(errors) !== '{}'}"
           :for="id">
      {{ label }}</label>
    <input
      v-bind="$attrs"
      :type="type"
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :class="{error: JSON.stringify(errors) !== '{}'}"
      :maxlength="maxLength"
      @input="formatValue"
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
    modelValue: String,
    placeholder: String,
    maxLength: String,
    errors: {
      type: Object,
      default: () => {}
    },
    format: String
  },
  data () {
    return {

    }
  },
  methods: {
    formatValue ($event) {
      this.$emit('update:modelValue', $event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
