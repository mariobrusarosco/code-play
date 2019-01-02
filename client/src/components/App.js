import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Actions
import * as actions from '../actions'
// Components
import Header from '../components/Header'
// Vendor Styles
import 'materialize-css/dist/css/materialize.css'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNewer = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const mapStateToProps = ({ auth }) => ({
	auth
})

class App extends Component {
	componentDidMount() {
		this.props.fetchUser()
	}


	render() {
		// console.log(this.props)
		return (
			<BrowserRouter>
				<div>
					<Header
						auth={this.props.auth}
					/>
					<Route
						path="/"
						component={Landing}
						exact
					/>
					<Route
						path="/surveys"
						component={Dashboard}
						exact
					/>
					<Route
						path="/surveys/new"
						component={SurveyNewer}
					/>
				</div>
			</BrowserRouter>
		)
	}
}

export default connect(mapStateToProps, actions)(App)
