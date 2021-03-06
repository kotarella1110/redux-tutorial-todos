import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from './components/Root'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Root store={store} />,
  document.getElementById('root')
)
