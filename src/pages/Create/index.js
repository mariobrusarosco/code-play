// Vendor

// Components
import StreamForm from 'components/StreamForm'
// Actions
import { createStream } from '../../actions'
import { connect } from 'react-redux';

class Create extends Component {

  onSubmit = formValues => {
    this.props.createStream(formValues)
  }

  render() {
    return (
      <div className="create">
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}


export default connect(null, { createStream })(Create)
