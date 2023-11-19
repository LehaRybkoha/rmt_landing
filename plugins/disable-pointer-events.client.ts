export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    document.body.classList.add('pointer-events-none')
  })

  nuxtApp.hook('page:finish', () => {
    document.body.classList.remove('pointer-events-none')
  })
})
