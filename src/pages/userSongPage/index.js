import UserSongPage from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSongs } from '../../actions/songActions'

const mapStateToProps = state => {
  return {
    songs: state.songsReducer.songs ? state.songsReducer.songs : '',
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
)(UserSongPage)
