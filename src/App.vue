<template>
  <navigation-component></navigation-component>
  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="bounce">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </transition>
  </router-view>
</template>

<script setup>
import NavigationComponent from '@/components/modules/NavigationComponent'

</script>

<style lang="scss">
  @import "src/styles/app";
</style>
