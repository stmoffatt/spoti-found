import SearchSongList from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { currentPlayingSong } from '../../actions/songActions'
import { addSongToLibrary } from '../../actions/userActions'

const mapStateToProps = state => {
  return {
    searchedSongs: state.songsReducer.searchedSongs ? state.songsReducer.searchedSongs : '',
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId,
    savedSongIds: state.songsReducer.savedSongIds,
    isLoggedIn: state.tokenReducer.isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
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
