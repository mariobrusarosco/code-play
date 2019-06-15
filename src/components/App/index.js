import React, { Component } from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import historyApp from '../../app_history'

// Components
import Header from 'components/Header'

// Pages (Routes)
import Create from '../../pages/Create'
import Edit from '../../pages/Edit'
import Delete from '../../pages/Delete'
import List from '../../pages/List'
import Show from '../../pages/Show'

class App extends Component {
  render() {
    return (
      <div className="main ui container">
        <Router history={historyApp}>
          <Header />
          <Switch>
            <Route path="/" exact component={List} />
            <Route path="/new" exact component={Create} />
            <Route path="/edit/:id" exact component={Edit} />
            <Route path="/delete/:id" exact component={Delete} />
            <Route path="/streams/:id" exact component={Show} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
