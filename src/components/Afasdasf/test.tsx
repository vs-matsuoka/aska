import { render, screen } from '@testing-library/react'

import Afasdasf from '.'

describe('<Afasdasf />', () => {
  it('should render the heading', () => {
    const { container } = render(<Afasdasf />)

    expect(screen.getByRole('heading', { name: /Afasdasf/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
