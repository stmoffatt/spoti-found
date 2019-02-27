import myArtistList from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchAlbums } from '../../actions/albumActions'
import { getArtist } from '../../actions/artistActions'
import { topTracks } from '../../actions/songActions'

const mapStateToProps = state => {
  return {
    myArtists: state.songsReducer.myArtists ? state.songsReducer.myArtists : '',
    user: state.userReducer.user,
    isLoggedIn: state.tokenReducer.isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      searchAlbums,
      getArtist,
      topTracks,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(myArtistList)
