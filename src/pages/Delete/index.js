import Modal from 'components/Modal'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Actions
import { fetchStream, deleteStream } from 'actions'

import history from 'app_history'


class Delete extends React.Component {
  componentDidMount() {
    const streamId = this.props.match.params.id

    this.props.fetchStream(streamId)
  }

  renderActions() {
    const { id } = this.props.match.params

    return (
      <Fragment>
        <button
          className="ui negative button"
          onClick={() => this.props.deleteStream(id)}
        >
          Delete
        </button>
        <Link
          to="/"
          className="ui button"
        >
          Cancel
        </Link>
      </Fragment>
    )
  }

  renderContent() {
    if(!this.props.stream) {
      return `Are you sure you want to delete the strem '...'`
    }
    else {
      return `Are you sure you want to delete the strem '${this.props.stream.title}'`
    }
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(Delete)
