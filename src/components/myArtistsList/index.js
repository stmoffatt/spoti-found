import myArtistList from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateHeaderTitle, updateSideBarContent, updateLibraryList } from '../../actions/uiActions'
import { updateShowComponent } from '../../actions/artistActions'
import { updateArtistId } from '../../actions/artistActions'
import { searchAlbums } from '../../actions/albumActions'
import { getArtist } from '../../actions/artistActions'
import { topTracks } from '../../actions/songActions'

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    myArtists: state.songsReducer.myArtists ? state.songsReducer.myArtists : '',
    viewType: state.artistsReducer.viewType,
    showComponent: state.artistsReducer.showComponent,
    user: state.userReducer.user,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateHeaderTitle,
      updateShowComponent,
      updateArtistId,
      searchAlbums,
      getArtist,
      topTracks,
      updateSideBarContent,
      updateLibraryList,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(myArtistList)
