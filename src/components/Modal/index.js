import { createPortal } from 'react-dom'

const Modal = ({
  title,
  content,
  actions,
  onDismiss,
}) => {
  return createPortal(
    <div className="ui dimmer modals visibible active" onClick={onDismiss}>
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

