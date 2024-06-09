/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */
module.exports = {
  "stories": [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook"
  ],

  webpackFinal: config => {
    config.module.rules.push({
      test: /.scss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    })
    return config;
  },

  framework: {
    name: "@storybook/vue3-webpack5",
    options: {}
  },

  docs: {}
}

