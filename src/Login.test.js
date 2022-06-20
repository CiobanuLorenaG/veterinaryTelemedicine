import { render, screen } from '@testing-library/react'
import Login from './components/pages/Chat/pages/Login'

test('initial render', () => {
  render(<Login />)
  screen.debug()
})
