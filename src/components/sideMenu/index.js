import SideMenu from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateHeaderTitle, updateSearchTitle } from '../../actions/uiActions'

const mapStateToProps = state => {
  return {
    title: state.uiReducer.title,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateSearchTitle,
      updateHeaderTitle,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideMenu)
