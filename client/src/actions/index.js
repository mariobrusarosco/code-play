// ACTION'S TYPES
import { FETCH_USER } from './types'

import axios from 'axios'

// Note: When dealing with redux thunk ....
// We must craete an action 'const fetchUser = () =>' that returns
// an anonymous function receiving a 'dispacth' argument
// dispactch => { ... }
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user')

	dispatch({ type: FETCH_USER, payload: res && res.data })
}

export const handleToken = () => async dispatch => {
	const res = axios.post('/api/stripe')

	dispatch({ type: FETCH_USER, payload: res && res.data})
}
