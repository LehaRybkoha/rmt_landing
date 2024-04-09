<script setup lang="ts">
import video from '~/assets/storm2.mp4'
</script>

<template>
  <div class="wrapper">
    <video autoplay muted loop class="fixed top-0 bottom-0 left-0 right-0 w-full h-full object-cover">
      <source src="~/assets/storm.mp4" type="video/mp4">
    </video>
    <Header />
    <section-main />
    <!-- <section-words /> -->
  </div>
</template>

<style scoped lang="postcss"></style>
