import { connect } from 'react-redux'
import { fetchStream } from '../../actions'
import flv from 'flv.js'

class Show extends Component {
  constructor(props) {
    super(props)

    this.videoRef = React.createRef()
  }
  componentDidMount() {
    const { id } = this.props.match.params

    this.props.fetchStream(id)

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    })

    this.player.attachMediaElement(this.videoRef.current)
    this.player.load()
  }

  render() {
    if(!this.props.stream) {
      return <div className="">loading</div>
    }

    const { title, description } = this.props.stream

    console.log(title)
    return (
      <div className="ui container">
        <h1>{ title }</h1>
        <h2>{ description } </h2>
        <video
          style={{ width: '100%' }}
          ref={this.videoRef}
          controls
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream })(Show)
