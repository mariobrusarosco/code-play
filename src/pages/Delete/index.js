import Modal from 'components/Modal'
import { Fragment } from 'react'


const Delete = () => {
  const actions = (
    <Fragment>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </Fragment>
  )

  return (
    <div className="delete">
      DeleteStream
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream"
        actions={actions}
      />
    </div>
  )
}

export default Delete
