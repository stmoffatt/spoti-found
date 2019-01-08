import MainView from './component'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    headerTitle: state.uiReducer.searchTitle,
  }
}

export default connect(mapStateToProps)(MainView)
