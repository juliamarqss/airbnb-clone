import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home page', () => {
  test('renders header', () => {
    render(<Home />)

    const headerElement = screen.getByText(/Airbnb/i)
    expect(headerElement).toBeInTheDocument()
  })
})
