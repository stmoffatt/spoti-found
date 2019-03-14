import Login from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../../actions/userActions'
import { setToken } from '../../actions/tokenActions'

const mapStateToProps = state => {
  return {
    isLoggedIn: state.tokenReducer.isLoggedIn,
    token: state.tokenReducer.token,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchUser,
      setToken,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
