import {setup} from '@storybook/vue3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

setup((app) => {
  app.use(ElementPlus)
})

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'responsive'
  },
}
