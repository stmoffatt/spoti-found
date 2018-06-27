import UserDetails from './component'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    displayName: state.userReducer.user ? state.userReducer.user.id : 'User',
    userImage: state.userReducer.user && state.userReducer.user.images[0] ? state.userReducer.user.images[0].url : '',
  }
}

export default connect(mapStateToProps)(UserDetails)
