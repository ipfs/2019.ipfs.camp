import React from 'react'
import ReactDOM from 'react-dom'
import { Hamburgler } from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Hamburgler />, div)
})
