import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { HstNuxt } from '@histoire/plugin-nuxt'

export default defineConfig({
  plugins: [
    HstVue(),
    HstNuxt(),
    {
      name: 'histoire-patch',
      config(config) {
        if (typeof config.vite === 'object' && config?.vite?.define)
          delete config.vite.define.__NUXT_VERSION__
      },
    },
  ],
  tree: {
    groups: [
      {
        id: 'elements',
        title: 'Components',
      },
    ],
  },
})
