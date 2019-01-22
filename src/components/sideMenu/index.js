import SideMenu from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSongs, updateViewType } from '../../actions/songActions'
import { fetchAlbums } from '../../actions/albumActions'
import { searchArtists } from '../../actions/artistActions'
import { updateHeaderTitle, updateSideBarContent, updateSearchTitle, updateLibraryList } from '../../actions/uiActions'
import { updateShowComponent } from '../../actions/artistActions'
import { toggleArtistMainComponent } from '../../actions/artistActions'

const mapStateToProps = state => {
  return {
    userId: state.userReducer.user ? state.userReducer.user.id : '',
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    artistIds: state.artistsReducer.artistIds,
    title: state.uiReducer.title,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSongs,
      fetchAlbums,
      searchArtists,
      updateViewType,
      updateSearchTitle,
      updateHeaderTitle,
      updateShowComponent,
      toggleArtistMainComponent,
      updateSideBarContent,
      updateLibraryList,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideMenu)
