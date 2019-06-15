// Enables Hot Module Replacement
if (module && module.hot) {
  module.hot.accept()
}

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
// Reducers
import reducers from './reducers'

// Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

import App from './components/App'
import AppPosts from './components/AppPosts'

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <AppPosts /> */}
  </Provider>,
  document.querySelector('#app')
)
