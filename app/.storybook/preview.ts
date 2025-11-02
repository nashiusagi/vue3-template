import {setup} from '@storybook/vue3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

setup((app) => {
  app.use(ElementPlus)
})

export const parameters = {
  viewport: {
    defaultViewport: 'responsive'
  },
}
