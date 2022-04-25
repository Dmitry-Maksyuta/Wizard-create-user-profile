import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'store'
import GlobalStyle from 'styled'
import App from 'App'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  rootElement
)
