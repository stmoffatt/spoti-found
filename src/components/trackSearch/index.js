import TrackSearch from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchSongs } from '../../actions/songActions'
import { searchArtists } from '../../actions/artistActions'
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      searchSongs,
      searchArtists,
    },
    dispatch,
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrackSearch)
