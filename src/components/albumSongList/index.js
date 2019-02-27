import AlbumSongList from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { currentPlayingSong } from '../../actions/songActions'

const mapStateToProps = state => {
  return {
    albumSongs: state.songsReducer.albumSongs ? state.songsReducer.albumSongs : '',
    fetchPlaylistSongsPending: state.songsReducer.fetchPlaylistSongsPending,
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId,
    isLoggedIn: state.tokenReducer.isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      currentPlayingSong,
    },
    dispatch,
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumSongList)
