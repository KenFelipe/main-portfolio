module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/atoms": path.resolve(__dirname, "../src/components/atoms"),
      "@/molecules": path.resolve(__dirname, "../src/components/molecules"),
      "@/organisms": path.resolve(__dirname, "../src/components/organisms"),
      "@/templates": path.resolve(__dirname, "../src/components/templates"),
      "@/api": path.resolve(__dirname, "../src/api"),
      "@/styles": path.resolve(__dirname, "../src/styles"),
      "@/utils": path.resolve(__dirname, "../src/utils"),
    }
    return config;
  }
}
