import YourLibraryNavigation from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateViewType } from '../../actions/songActions'
import { updateSearchTitle } from '../../actions/uiActions'

const mapStateToProps = state => {
  return {
    searchTitle: state.uiReducer.searchTitle,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateViewType,
      updateSearchTitle,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(YourLibraryNavigation)
