import styled, { css } from 'styled-components'

export const Container = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.size.secondary};
    color: ${theme.color.secondary};
  `}
`
