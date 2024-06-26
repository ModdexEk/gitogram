/** @type { import('@storybook/vue3').Preview } */
import "../src/global.scss";
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;
