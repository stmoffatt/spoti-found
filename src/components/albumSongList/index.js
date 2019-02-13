import AlbumSongList from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { albumTracks, currentPlayingSong } from '../../actions/songActions'
import { addSongToLibrary } from '../../actions/userActions'
import { toggleArtistMainComponent } from '../../actions/artistActions'

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    albumSongs: state.songsReducer.albumSongs ? state.songsReducer.albumSongs : '',
    fetchPlaylistSongsPending: state.songsReducer.fetchPlaylistSongsPending,
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId,
    songAddedId: state.userReducer.songId || '',
    albumIds: state.albumsReducer.albumIds,
    viewType: state.songsReducer.viewType,
    CurrentPlayingSongList: state.songsReducer.CurrentPlayingSongList,
    isLoggedIn: state.tokenReducer.isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      albumTracks,
      addSongToLibrary,
      toggleArtistMainComponent,
      currentPlayingSong,
    },
    dispatch,
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumSongList)
