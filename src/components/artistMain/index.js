import artistMain from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchAlbums } from '../../actions/albumActions'
import { setAlbumIds } from '../../actions/albumActions'
import { getArtist } from '../../actions/artistActions'
import { toggleArtistMainComponent } from '../../actions/artistActions'
import { updateShowComponent } from '../../actions/artistActions'
import { albumTracks, currentPlayingSong } from '../../actions/songActions'
import { updateSideBarContent, updateLibraryList } from '../../actions/uiActions'

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    viewType: state.artistsReducer.viewType,
    albums: state.albumsReducer.albums ? state.albumsReducer.albums : '',
    artist: state.artistsReducer.artist ? state.artistsReducer.artist : '',
    topTracks: state.songsReducer.topTracks ? state.songsReducer.topTracks : '',
    artistId: state.artistsReducer.artistId,
    toggleMain: state.artistsReducer.toggleMain,
    songId: state.songsReducer.songId,
    viewType: state.songsReducer.viewType,
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    CurrentPlayingSongList: state.songsReducer.CurrentPlayingSongList,
    isLoggedIn: state.tokenReducer.isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      searchAlbums,
      getArtist,
      setAlbumIds,
      toggleArtistMainComponent,
      updateShowComponent,
      albumTracks,
      currentPlayingSong,
      updateSideBarContent,
      updateLibraryList,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(artistMain)
