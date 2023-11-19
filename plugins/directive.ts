import { Mask, MaskInput } from 'maska'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('phone', {
    mounted(target, binding, vnode) {
      const input = target.querySelector('input')
      const exp = '+7 (###) ###-##-##'
      const mask = new Mask({ mask: exp })
      // eslint-disable-next-line unused-imports/no-unused-vars
      const masked = new MaskInput(input, { mask: exp })

      input.addEventListener('input', (e) => {
        const { value } = e.target
        const formattedPhone = formatPhone(value)

        if (formattedPhone[2] === '8')
          vnode.ctx.emit('update:modelValue', '+7')
      })

      input.addEventListener('paste', (e) => {
        const windowData: Window = window
        const clipboardData = e.clipboardData || windowData.clipboardData
        const pastedData: string = clipboardData.getData('Text').trim()

        const formattedPhone = formatPhone(pastedData)

        if (!pastedData.length)
          return

        e.preventDefault()

        if (formattedPhone.startsWith('8'))
          return vnode.ctx.emit('update:modelValue', mask.masked(`+7${formattedPhone.slice(1)}`))

        if (formattedPhone[0].startsWith('+'))
          return vnode.ctx.emit('update:modelValue', mask.masked(formattedPhone.slice(2, formattedPhone.length)))

        if (formattedPhone[0].startsWith('7'))
          return vnode.ctx.emit('update:modelValue', mask.masked(formattedPhone.slice(1, formattedPhone.length)))

        vnode.ctx.emit('update:modelValue', mask.masked(formattedPhone))
      })
    },
    getSSRProps() {
      return {}
    },
  })
})
