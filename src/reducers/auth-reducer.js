import { handleActions } from 'redux-actions'

const initialState = {
  isSignedIn: null,
  userId: null
}

const authReducer = handleActions({
  SIGN_IN: (state, { payload }) => ({
    ...state, isSignedIn: true, userId: payload,
  }),
  SIGN_OUT: (state, { payload }) => ({
    ...state, isSignedIn: false, userId: null
  })
}, initialState)

export default authReducer
