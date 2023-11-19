import { useVfm } from 'vue-final-modal'
import { useMainStore } from '~/stores/main'

export default defineNuxtRouteMiddleware(() => {
  const cookie = useCookie('profile')
  const mainStore = useMainStore()

  if (cookie.value)
    mainStore.changeStore({ ...cookie.value })
})
