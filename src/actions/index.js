import streamsAPI from '../api/streams'

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

    dispatch({
      type: 'CREATE_STREAM',
      payload: createdStream.data,
    })
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

export const fetchStream = streamID => {
  return async dispatch => {
    const fetchedStream = await streamsAPI.get(`/streams/${streamID}`)

    dispatch({
      type: 'FETCH_STREAM',
      payload: fetchedStream.data,
    })
  }
}

export const editStream = (streamID, dataToUpdate) => {
  return async dispatch => {
    const updatedStream = await streamsAPI.put(`/streams/${streamID}`, dataToUpdate)

    dispatch({
      type: 'EDIT_STREAM',
      payload: updatedStream.data,
    })
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
