import { createPortal } from 'react-dom'

import history from 'app_history'

const Modal = ({
  title,
  content,
  actions
}) => {
  return createPortal(
    <div className="ui dimmer modals visibible active" onClick={() => history.push('/') }>
      <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
        <div className="header">{ title }</div>
        <div className="content">{ content }</div>
        <div className="actions">{ actions }</div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal

