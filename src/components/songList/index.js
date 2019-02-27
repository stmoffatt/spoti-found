import SongList from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSongs, currentPlayingSong, deleteTrack } from '../../actions/songActions'

const mapStateToProps = state => {
  return {
    songs: state.songsReducer.songs ? state.songsReducer.songs : '',
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId,
    isLoggedIn: state.tokenReducer.isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSongs,
      currentPlayingSong,
      deleteTrack,
    },
    dispatch,
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SongList)
