import { combineReducers } from 'redux'

import streamsReducer from './streams-reducer'
import authReducer from './auth-reducer'

import { reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
  form: formReducer,
  streams: streamsReducer,
  auth: authReducer,
})

export default reducers
