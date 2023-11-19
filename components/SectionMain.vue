<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const raiseBlock = ref<HTMLElement>()

gsap.registerPlugin(ScrollTrigger)

let ctx = null as gsap.Context | null

const isShownContent = ref(false)

const isShownWordsSection = ref(false)

onMounted(() => {
  ctx = gsap.context((self) => {
    if (!self)
      return
    const elBlock = self.selector('.scroll-block')

    const elLine = self.selector('.scroll-line')

    // const boxes = self.selector('.box');
    elBlock.forEach((child) => {
      gsap.to(child, {
        width: '60%',
        duration: 1,
        scrollTrigger: {
          start: '+=100px',
          //pin: document.querySelector('.main'),
          onToggle: () => {
            setTimeout(() => {
              isShownContent.value = true
            }, 500)
          },
        },
      })
    })
    elLine.forEach((child) => {
      gsap.to(child, {
        x: '100%',
        scrollTrigger: {
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          onLeave: () => {
            isShownWordsSection.value = true
          },
        },
      })
    })
  }, raiseBlock.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="raiseBlock" class="main flex h-[2000px]">
    <div class="relative h-full w-full">
      <div class="sticky top-0 flex h-screen w-full items-center justify-center">
        <img src="~/assets/images/logo-big.png" alt="" class="h-[500px] w-[400px]">
      </div>
      <div class="scroll-line fixed bottom-16 left-9 z-50 flex w-[80%] items-center justify-between">
        <p class="max-w-[480px] text-h2 text-white">
          От идеи до совершенства: ваше мероприятие в надежных руках!
        </p>
        <div class="h-[2px] w-full max-w-[700px] bg-white" />
      </div>
    </div>
    <div class="relative scroll-block h-full w-[20%] overflow-hidden bg-black">
      <div class="flex flex-col items-center p-[100px] fixed top-0 transition-opacity duration-300" :class="`${isShownContent ? 'opacity-1' : 'opacity-0'}`">
        <div class="relative mb-20">
          <svg width="185" height="139" viewBox="0 0 185 139" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120.107 102.022L120.104 102.028C118.07 107.022 115.448 111.679 112.241 115.997C109.006 120.352 105.058 124.111 100.408 127.273L100.397 127.28L100.397 127.28C95.7373 130.387 90.3558 132.825 84.2688 134.608C78.2032 136.402 71.3424 137.288 63.7031 137.288C56.0618 137.288 49.1713 136.402 43.0471 134.608L43.0431 134.607C37.0162 132.823 31.6665 130.385 27.0093 127.28L26.9978 127.273L26.9978 127.273C22.3482 124.111 18.4005 120.352 15.165 115.997C11.958 111.679 9.33655 107.022 7.30178 102.028L7.29936 102.022C5.26937 96.9777 3.79535 91.6622 2.87495 86.0784C1.95852 80.5187 1.5 74.957 1.5 69.394C1.5 63.7723 1.95829 58.2101 2.87514 52.7085C3.79478 47.1298 5.23719 41.8477 7.20551 36.8654L7.20902 36.8565L7.20904 36.8565C9.2436 31.8009 11.8656 27.1115 15.0747 22.7915C18.3091 18.4375 22.2266 14.7078 26.819 11.6046C31.4809 8.43476 36.8658 5.96434 42.9567 4.18012C49.082 2.38586 56.0028 1.5 63.7031 1.5C71.4034 1.5 78.3243 2.38586 84.4495 4.18012C90.5382 5.96368 95.8937 8.43365 100.497 11.6047C105.148 14.7068 109.096 18.4361 112.332 22.7915C115.541 27.1125 118.134 31.8035 120.109 36.8611C122.138 41.8442 123.611 47.1274 124.531 52.707L120.107 102.022ZM120.107 102.022C122.137 96.9777 123.611 91.6622 124.531 86.0784C125.448 80.5187 125.906 74.957 125.906 69.394C125.906 63.7718 125.448 58.2092 124.531 52.7072L120.107 102.022ZM55.8984 36.2225L55.9012 36.2202C58.1591 34.3386 60.7395 33.4062 63.7031 33.4062C66.6662 33.4062 69.2095 34.3379 71.4011 36.2087L71.416 36.2214L71.4312 36.2337C73.7588 38.118 75.7391 40.6991 77.3474 44.0305C78.9664 47.3842 80.1946 51.2585 81.0177 55.6678L81.0194 55.6773L81.0213 55.6868C81.9042 60.101 82.3472 64.6994 82.3472 69.4844C82.3472 74.1528 81.9336 78.6976 81.108 83.1203C80.2852 87.5279 79.0577 91.4008 77.4397 94.7536C75.8319 98.0251 73.8473 100.616 71.5051 102.568C69.2471 104.45 66.6667 105.382 63.7031 105.382C60.6755 105.382 58.0689 104.447 55.8178 102.574C53.5333 100.622 51.5761 98.0288 49.9662 94.7527C48.3483 91.4002 47.1209 87.5275 46.2983 83.1203C45.4727 78.6976 45.0591 74.1528 45.0591 69.4844C45.0591 64.6966 45.4725 60.0949 46.2965 55.6774C47.1794 51.2661 48.4378 47.3883 50.0588 44.0305C51.6707 40.6917 53.6259 38.107 55.8984 36.2225ZM181.422 134.668H182.922V133.168V5.43896V3.93896H181.422H166.877H166.46L166.103 4.15378C159.628 8.05097 154.017 11.0934 149.265 13.2914C144.492 15.4989 140.127 17.2196 136.167 18.4608L135.116 18.7903V19.8921V44.6431V46.4425L136.886 46.1186L155.35 42.7389V133.168V134.668H156.85H181.422Z" stroke="white" stroke-width="3" />
          </svg>
          <div class="absolute left-[-30px] top-0 flex h-full items-center">
            <span class="flex w-[260px] items-center justify-center bg-white py-1 text-[20px] font-medium text-black">О НАС</span>
          </div>
        </div>
        <h2 class="mb-[30px] text-h2 text-white">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <p class="text-p-small text-white">
          Lorem ipsum dolor sit amet consectetur. In sollicitudin tincidunt mi laoreet. Aliquet congue pellentesque diam velit blandit tellus. Duis nec risus etiam morbi scelerisque phasellus porttitor.
          <br>
          <br>
          Magnis risus auctor fusce tellus tellus massa viverra. Viverra mi lacus eu nulla faucibus curabitur. Tempus nunc egestas suscipit egestas neque vulputate a magna. Ornare in integer in cras nisi.
        </p>
        <Button text="Наши кейсы" class="mt-[100px]" />
      </div>
      <p class="slide absolute right-12 origin-right whitespace-nowrap text-h1 text-white">
        РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити         РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити РМТ-Комьюнити
      </p>
    </div>
  </section>
</template>

<style>
@keyframes slide {
  from {
    transform: rotate(270deg) translateX(0);
  }
  to {
    transform: rotate(270deg) translateX(100%);
  }
}

.slide {
  animation: slide 200s linear infinite;
}
</style>
