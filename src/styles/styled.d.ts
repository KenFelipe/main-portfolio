import 'styled-components'
import { theme } from './theme'

type Theme = typeof theme

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends Theme {}
}
