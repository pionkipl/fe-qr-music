<template>
  <navigation-component></navigation-component>
  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="bounce">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import NavigationComponent from '@/components/modules/NavigationComponent'

</script>

<style lang="scss">
  @import "src/styles/app";
</style>
