import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchUser } from './actions/userActions'
import { setToken } from './actions/tokenActions'
import { playSong, stopSong, pauseSong, resumeSong } from './actions/songActions'
import './App.css'

import Header from './components/header'
import MainView from './components/mainView'
import ArtWork from './components/artWork'
import Footer from './components/footer'
import SideMenu from './components/sideMenu'
import AlbumSongList from './components/albumSongList'
import SpotifyWebApi from 'spotify-web-api-js'
const spotifyApi = new SpotifyWebApi()

class App extends Component {
  static audio

  componentDidMount() {
    let hashParams = {}
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1)
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2])
    }

    if (!hashParams.access_token) {
      window.location.href =
        'https://accounts.spotify.com/authorize?client_id=fe15f7e5f0174c49b581f188294c1816&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=https://spoti-found.herokuapp.com/'
    } else {
      this.props.setToken(hashParams.access_token)
      spotifyApi.setAccessToken(hashParams.access_token)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.fetchUser(nextProps.token)
    }

    if (this.audio) {
      this.audio.volume = nextProps.volume / 100
    }
  }
  stopSong = () => {
    if (this.audio) {
      this.props.stopSong()
      this.audio.pause()
    }
  }

  pauseSong = () => {
    if (this.audio) {
      this.props.pauseSong()
      this.audio.pause()
    }
  }

  resumeSong = () => {
    if (this.audio) {
      this.props.resumeSong()
      this.audio.play()
    }
  }

  audioControl = song => {
    const { playSong, stopSong } = this.props
    if (song === undefined) {
      return
    } else {
      if (this.audio === undefined) {
        playSong(song.track)
        this.audio = new Audio(song.track.preview_url)
        this.audio.volume = this.props.volume / 100
        this.audio.play()
      } else {
        stopSong()
        this.audio.pause()
        playSong(song.track)
        this.audio = new Audio(song.track.preview_url)
        this.audio.volume = this.props.volume / 100
        this.audio.play()
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="left-side-section">
            <SideMenu />
          </div>

          <div className="main-section">
            <div className="main-section-container">
              <MainView
                pauseSong={this.pauseSong}
                resumeSong={this.resumeSong}
                audioControl={this.audioControl}
                albumAudioControl={this.albumAudioControl}
              />
            </div>
          </div>
          <Footer
            stopSong={this.stopSong}
            pauseSong={this.pauseSong}
            resumeSong={this.resumeSong}
            audioControl={this.audioControl}
          />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  token: PropTypes.string,
  fetchUser: PropTypes.func,
  setToken: PropTypes.func,
  pauseSong: PropTypes.func,
  playSong: PropTypes.func,
  stopSong: PropTypes.func,
  resumeSong: PropTypes.func,
  volume: PropTypes.number,
}

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token,
    volume: state.soundReducer.volume,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchUser,
      setToken,
      playSong,
      stopSong,
      pauseSong,
      resumeSong,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
