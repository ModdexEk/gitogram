import { ArgTypes, Description } from '@storybook/blocks'
import progress from './progress.vue'

export default {
  title: 'progress',
  components: progress,
  ArgTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end'
    }
  }
}

const template = (args) => ({
  components: { xProgress: progress },
  data () {
    return { args }
  },
  template: '<x-progress @onFinish="args.onFinish" />'
})

export const Default = template.bind({})
