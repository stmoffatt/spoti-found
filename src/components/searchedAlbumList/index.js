import SearchedAlbumList from './component'
import { connect } from 'react-redux'
import uniqBy from 'lodash/uniqBy'

const mapStateToProps = state => {
  const albumSongs = state.songsReducer.searchedSongs
    ? uniqBy(state.songsReducer.searchedSongs, item => {
        return item.track.album.name
      })
    : ''

  return {
    songs: albumSongs,
  }
}

export default connect(mapStateToProps)(SearchedAlbumList)
