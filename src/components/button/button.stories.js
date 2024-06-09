import button from './button.vue'

export default {
  title: 'button',
  components: { button },
  ArgTypes: {
    text: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `
     <xButton v-bind="args">Follow</xButton>
    `
})

export const Default = template.bind({})

Default.args = {
  text: 'Follow me'
}
