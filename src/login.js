import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { fetchUser } from './actions/userActions'
import { setToken } from './actions/tokenActions'
import PropTypes from 'prop-types'
import SpotifyWebApi from 'spotify-web-api-js'
const spotifyApi = new SpotifyWebApi()

const authUrl =
  'https://accounts.spotify.com/authorize?client_id=fe15f7e5f0174c49b581f188294c1816&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=https://spoti-found.herokuapp.com/'

class Login extends Component {
  extractHashFromUrl() {
    let hashParams = {}
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1)
    while ((e = r.exec(q))) hashParams[e[1]] = decodeURIComponent(e[2])

    if (hashParams.access_token) {
      this.props.setToken(hashParams.access_token)
      spotifyApi.setAccessToken(hashParams.access_token)
      return true
    } else return false
  }

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      if (!this.extractHashFromUrl()) {
        window.location.href = authUrl
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isLoggedIn) {
      if (nextProps.token) {
        this.props.fetchUser(nextProps.token)
      }
    }
  }
  render() {
    if (this.props.isLoggedIn) return <Redirect to="/YourLibrary" />
    return <div />
  }
}

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

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  token: PropTypes.string,
  fetchUser: PropTypes.func,
  setToken: PropTypes.func,
}

const LoginConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
export default withRouter(LoginConnected)
