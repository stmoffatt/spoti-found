import SearchSongList from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSongs, currentPlayingSong } from '../../actions/songActions'
import { addSongToLibrary } from '../../actions/userActions'

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    searchedSongs: state.songsReducer.searchedSongs ? state.songsReducer.searchedSongs : '',
    fetchSongsError: state.songsReducer.fetchSongsError,
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId,
    savedSongIds: state.songsReducer.savedSongIds,
    songAddedId: state.userReducer.songId || '',
    viewType: state.songsReducer.viewType,
    CurrentPlayingSongList: state.songsReducer.CurrentPlayingSongList,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSongs,
      addSongToLibrary,
      currentPlayingSong,
    },
    dispatch,
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchSongList)
