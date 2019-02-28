import SearchSongPage from './component'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    searchedSongs: state.songsReducer.searchedSongs ? state.songsReducer.searchedSongs : '',
  }
}

export default connect(mapStateToProps)(SearchSongPage)
