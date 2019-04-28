import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

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
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={List} />
          <Route path="/new" exact component={Create} />
					<Route path="/edit" exact component={Edit} />
          <Route path="/delete" exact component={Delete} />
					<Route path="/show" exact component={Show} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
