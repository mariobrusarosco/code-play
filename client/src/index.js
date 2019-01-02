import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'


//Reducers
import reducers from './reducers'
// Actions
// import { fetchUser } from './actions'
// Components
import App from './components/App';

if(module && module.hot) {
	module.hot.accept()
}

const composeEnhancers = compose(
	applyMiddleware(reduxThunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

const store = createStore(reducers, {}, composeEnhancers)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
