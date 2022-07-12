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
import { onBeforeMount } from "vue"
import { useStore } from 'vuex'
const store = useStore()
onBeforeMount(() => {
  store.dispatch('getSongs')
})
</script>

<style lang="scss">
  @import "src/styles/app";
</style>
