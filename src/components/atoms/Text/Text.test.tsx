import { render, screen } from '@/utils/testUtils'
import { Text } from './Text'

it('render label correctly', () => {
  const { container } = render(<Text>react-testing-library</Text>)

  expect(screen.getByText(/react-testing-library/)).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
