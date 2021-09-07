import { ThemeProvider } from "styled-components";
import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/global'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'dark', value: '#000' },
      { name: 'gray', value: '#ccc' },
    ],
  },
  options: {
    storySort: {
      order: [
        'Atoms',
        'Organisms',
        'Molecules',
        'Templates',
        'Pages',
      ],
    },
  },
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
