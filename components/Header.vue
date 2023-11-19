<script setup lang="ts">
// import Logo from '~/assets/images/logo-rmt.png'
</script>

<template>
  <header class="flex items-center gap-10 px-14 py-7 fixed top-0 w-full z-50">
    <div class="max-w-[70px] max-h-[70px] flex-none">
      <img src="~/assets/images/logo-rmt.png" alt="" class="w-full h-full">
    </div>
    <nav class="text-h6 text-white flex justify-between max-w-[850px] w-full items-center">
      <nuxt-link>О НАС</nuxt-link>
      <nuxt-link>ДОСТИЖЕНИЯ</nuxt-link>
      <nuxt-link>КЕЙСЫ</nuxt-link>
      <nuxt-link>УСЛУГИ</nuxt-link>
      <nuxt-link>ПАРТНЕРЫ</nuxt-link>
      <nuxt-link class="text-error p-2 border-error border-2">СВЯЗАТЬСЯ С НАМИ</nuxt-link>
    </nav>
  </header>
</template>

<style scoped lang="postcss"></style>
