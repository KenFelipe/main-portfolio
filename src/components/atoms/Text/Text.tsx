import * as Styled from './Text.styled'

export type TextProps = {
  children: React.ReactNode
}

export const Text = ({ children }: TextProps) => {
  return <Styled.Container>{children}</Styled.Container>
}
