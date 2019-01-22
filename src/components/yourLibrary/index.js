import YourLibrary from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSongs, updateViewType, searchSongs } from '../../actions/songActions'
import { fetchAlbums, searchAlbums } from '../../actions/albumActions'
import { searchArtists } from '../../actions/artistActions'
import { updateHeaderTitle, updateSearchTitle } from '../../actions/uiActions'
import { updateShowComponent } from '../../actions/artistActions'
import { toggleArtistMainComponent } from '../../actions/artistActions'

const mapStateToProps = state => {
  return {
    userId: state.userReducer.user ? state.userReducer.user.id : '',
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    artistIds: state.artistsReducer.artistIds,
    title: state.uiReducer.title,
    searchTitle: state.uiReducer.searchTitle,
    content: state.uiReducer.content,
    library: state.uiReducer.library,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSongs,
      fetchAlbums,
      searchAlbums,
      searchSongs,
      searchArtists,
      updateViewType,
      updateHeaderTitle,
      updateSearchTitle,
      updateShowComponent,
      toggleArtistMainComponent,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(YourLibrary)
