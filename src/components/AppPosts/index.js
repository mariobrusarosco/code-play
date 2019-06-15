import React, { Component } from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import historyApp from '../../app_history'

// Components
import List from '../PostProject/List'
// Pages (Routes)

class AppPosts extends Component {
  render() {
    return (
      <div className="main ui container">
        <Router history={historyApp}>
          <Route path="/" exact component={List} />
        </Router>
      </div>
    )
  }
}

export default AppPosts
