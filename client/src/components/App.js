import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Header from '../components/Header'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNewer = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
		<BrowserRouter>
			<div>
				<Header />
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
export default App;
