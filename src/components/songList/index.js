import SongList from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { currentPlayingSong, deleteTrack } from '../../actions/songActions'
import { addSongToLibrary } from '../../actions/userActions'

const mapStateToProps = state => {
  return {
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId,
    isLoggedIn: state.tokenReducer.isLoggedIn,
    savedSongIds: state.songsReducer.savedSongIds,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      currentPlayingSong,
      deleteTrack,
      addSongToLibrary,
    },
    dispatch,
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SongList)
