// Vendor
import _ from 'lodash'
// Components
import StreamForm from 'components/StreamForm'
// Actions
import { fetchStreams, editStream } from '../../actions'
import { connect } from 'react-redux';

class Edit extends Component {
  componentDidMount() {
    this.props.fetchStreams(this.props.match.params.id)
  }

  onSubmit = formValues => {
    const { title, description } = formValues

    this.props.editStream(this.props.match.params.id, {
      title,
      description
    })
  }

  render() {
    return (
      <div className="edit">
        <h3>Edit Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  }
}

export default connect(mapStateToProps, { fetchStreams, editStream })(Edit)
