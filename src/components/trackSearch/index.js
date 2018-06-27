import TrackSearch from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchSongs } from '../../actions/songActions'
import { searchArtists } from '../../actions/artistActions'
import { updateShowComponent } from '../../actions/artistActions'
import { toggleArtistMainComponent } from '../../actions/artistActions'

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      searchSongs,
      searchArtists,
      updateShowComponent,
      toggleArtistMainComponent,
    },
    dispatch,
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrackSearch)
