import artistMain from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { albumTracks, currentPlayingSong } from '../../actions/songActions'

const mapStateToProps = state => {
  return {
    albums: state.albumsReducer.albums ? state.albumsReducer.albums : '',
    artist: state.artistsReducer.artist ? state.artistsReducer.artist : '',
    topTracks: state.songsReducer.topTracks ? state.songsReducer.topTracks : '',
    songId: state.songsReducer.songId,
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    isLoggedIn: state.tokenReducer.isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      albumTracks,
      currentPlayingSong,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(artistMain)
