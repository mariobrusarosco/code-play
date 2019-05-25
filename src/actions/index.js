import streamsAPI from '../api/streams'
import history from '../app_history'


export const signIn = userId => {
  return {
    type: 'SIGN_IN',
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};


export const createStream = formValues => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth
    const createdStream = await streamsAPI.post('/streams', { ...formValues, userId })

    await dispatch({
      type: 'CREATE_STREAM',
      payload: createdStream.data,
    })

    history.push('/')
  }
}

export const fetchStreams = () => {
  return async dispatch => {
    const fetchedStreams = await streamsAPI.get('/streams')

    dispatch({
      type: 'FETCH_STREAMS',
      payload: fetchedStreams.data,
    })
  }
}

export const editStream = (streamID, dataToUpdate) => {
  return async dispatch => {
    const updatedStream = await streamsAPI.patch(`/streams/${streamID}`, dataToUpdate)

    dispatch({
      type: 'EDIT_STREAM',
      payload: updatedStream.data,
    })

    history.push('/')
  }
}

export const deleteStream = streamID => {
  return async dispatch => {
    await streamsAPI.delete(`streams/${streamID}`)

    dispatch({
      type: 'DELETE_STREAM',
      payload: streamID
    })
  }
}
