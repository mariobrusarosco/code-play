// Vendor
import { Field, reduxForm } from 'redux-form'

// Actions
import { createStream } from '../../actions'
import { connect } from 'react-redux';

class StreamForm extends Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{ label }</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  }


  render() {
    return (
      <div className="create">
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label="Enter title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter description"
          />
          <button className="ui primary button">Submit</button>
        </form>
      </div>
    )
  }
}

const validate = formValue => {
  const errors = {}

  if (!formValue.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValue.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm)
