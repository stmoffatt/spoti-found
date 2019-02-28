import SearchArtistPage from './component'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    artists: state.artistsReducer.artists ? state.artistsReducer.artists : '',
  }
}

export default connect(mapStateToProps)(SearchArtistPage)
