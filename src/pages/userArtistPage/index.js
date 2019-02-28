import UserArtistPage from './component'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    myArtists: state.songsReducer.myArtists ? state.songsReducer.myArtists : '',
  }
}

export default connect(mapStateToProps)(UserArtistPage)
