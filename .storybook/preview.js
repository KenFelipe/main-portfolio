import { muiTheme } from 'storybook-addon-material-ui'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from '@/styles/theme'

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
        'Molecules',
        'Organisms',
        'Templates',
        'Pages',
      ],
    },
  },
}

export const decorators = [
  Story => (
    <>
      <CssBaseline />
      <Story />
    </>
  ),
	muiTheme([theme]),
]
