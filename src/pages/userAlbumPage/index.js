import UserAlbumList from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uniqBy from 'lodash/uniqBy'
import { fetchSongs } from '../../actions/songActions'

const mapStateToProps = state => {
  const albumSongs = state.songsReducer.songs
    ? uniqBy(state.songsReducer.songs, item => {
        return item.track.album.name
      })
    : ''

  return {
    songs: albumSongs,
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSongs,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserAlbumList)
