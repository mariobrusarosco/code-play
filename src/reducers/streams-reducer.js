
import _ from 'lodash'
import { handleActions } from 'redux-actions'

const initialState = {
  streams: []
}

const streamsReducer = handleActions({
  FETCH_STREAM: (state, { payload: data }) => ({
    ...state, [data.id]: data,
  }),
  FETCH_STREAMS: (state, { payload: streams }) => ({
    ...state, ...streams.reduce((acc, stream) => ({...acc, [stream.id]: stream }), {})
  }),
  CREATE_STREAM: (state, { payload: newStream }) => ({
    ...state, [newStream.id]: newStream
  }),
  EDIT_STREAM: (state, { payload: stream }) => ({
    ...state, [stream.id]: stream
  }),
  DELETE_STREAM: (state, { payload: streamId }) => {
    return _.omit(state, streamId )
  }
},[])

export default streamsReducer
