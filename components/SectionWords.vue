<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const mainBlock = ref<HTMLElement>()

gsap.registerPlugin(ScrollTrigger)

let ctx = null as gsap.Context | null

onMounted(() => {
  ctx = gsap.context((self) => {
    const elText = self.selector('#gtheading')

    elText.forEach((child) => {
      gsap.to(child, {
        x: '-100%',
        duration: 2,
        scrollTrigger: {
          start: 'top top',
          scrub: 1,
        },
      })
    })
  }, mainBlock.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="mainBlock" class="h-[150vh]">
    <svg class="banner fixed bottom-0 top-0 left-0 right-0 w-full h-full">
      <mask id="mask">
        <rect fill="white" width="100%" height="100%" />
        <text id="gtheading" dominant-baseline="central" x="50%" y="50%" text-anchor="middle">EVENT</text>
      </mask>
      <rect id="mask-bg" width="100%" height="100%" />
    </svg>
  </section>
</template>

<style scoped>
#gtheading {
  font-size: 800px;
  font-weight: bold;
  transform: translateX(100%);
}

#mask-bg {
  mask: url('#mask')
}
</style>
