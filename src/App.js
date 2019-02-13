import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchUser } from './actions/userActions'
import { setToken } from './actions/tokenActions'
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'
import { playSong, stopSong, pauseSong, resumeSong } from './actions/songActions'
import './App.css'

import Footer from './components/footer'
import SideMenu from './components/sideMenu'
import YourLibrary from './components/yourLibrary'
import TrackSearch from './components/trackSearch'
import SongList from './components/songList'
import AlbumList from './components/albumList'
import MyArtistList from './components/myArtistsList'
import SearchSongList from './components/searchSongList'
import SearchAlbumList from './components/searchedAlbumList'
import ArtistList from './components/artistList'
import ArtistMain from './components/artistMain'
import AlbumSongList from './components/albumSongList'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './login'
const spotifyApi = new SpotifyWebApi()

class App extends Component {
  static audio

  componentWillReceiveProps(nextProps) {
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
        <Route exact path="/" component={Login} />
        <div className={this.props.title === 'Your Library' || this.props.content ? 'no-display' : ''}>
          <TrackSearch />
        </div>
        <div className="app-container">
          <div className="left-side-section">
            <SideMenu />
          </div>

          <div className="main-section">
            <YourLibrary />
            <div className="main-section-container">
              <Route
                exact
                path="/YourLibrary"
                render={props => (
                  <SongList resumeSong={this.resumeSong} pauseSong={this.pauseSong} audioControl={this.audioControl} />
                )}
              />
              <Route
                exact
                path="/YourLibrary/Albums"
                render={props => (
                  <AlbumList resumeSong={this.resumeSong} pauseSong={this.pauseSong} audioControl={this.audioControl} />
                )}
              />
              <Route
                exact
                path="/YourLibrary/Artists"
                render={props => (
                  <MyArtistList
                    resumeSong={this.resumeSong}
                    pauseSong={this.pauseSong}
                    audioControl={this.audioControl}
                  />
                )}
              />
              <Route
                exact
                path="/Search"
                render={props => (
                  <SearchSongList
                    resumeSong={this.resumeSong}
                    pauseSong={this.pauseSong}
                    audioControl={this.audioControl}
                  />
                )}
              />
              <Route
                exact
                path="/Search/Albums"
                render={props => (
                  <SearchAlbumList
                    resumeSong={this.resumeSong}
                    pauseSong={this.pauseSong}
                    audioControl={this.audioControl}
                  />
                )}
              />
              <Route
                exact
                path="/Search/Artists"
                render={props => (
                  <ArtistList
                    resumeSong={this.resumeSong}
                    pauseSong={this.pauseSong}
                    audioControl={this.audioControl}
                  />
                )}
              />
              <Route
                exact
                path="/ArtistMain"
                render={props => (
                  <ArtistMain
                    resumeSong={this.resumeSong}
                    pauseSong={this.pauseSong}
                    audioControl={this.audioControl}
                  />
                )}
              />
              <Route
                exact
                path="/AlbumMain"
                render={props => (
                  <AlbumSongList
                    resumeSong={this.resumeSong}
                    pauseSong={this.pauseSong}
                    audioControl={this.audioControl}
                  />
                )}
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
  content: PropTypes.bool,
  title: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token,
    volume: state.soundReducer.volume,
    content: state.uiReducer.content,
    title: state.uiReducer.title,
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
)
