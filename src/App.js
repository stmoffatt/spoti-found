import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { playSong, stopSong, pauseSong, resumeSong } from './actions/songActions'
import './App.css'
import Footer from './components/footer'
import SideMenu from './components/sideMenu'
import YourLibraryNavigation from './components/yourLibraryNavigation'
import SearchNavigation from './components/searchNavigation'
import TrackSearch from './components/trackSearch'
import SongList from './components/songList'
import AlbumList from './components/albumList'
import MyArtistList from './components/myArtistsList'
import SearchSongList from './components/searchSongList'
import SearchAlbumList from './components/searchedAlbumList'
import ArtistList from './components/artistList'
import ArtistMain from './components/artistMain'
import AlbumSongList from './components/albumSongList'
import Login from './login'

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
    const displaySearch =
      this.props.location.pathname === '/Search' ||
      this.props.location.pathname === '/Search/Albums' ||
      this.props.location.pathname === '/Search/Artists'
        ? ''
        : 'no-display'

    const displayYourLibrary =
      this.props.location.pathname === '/YourLibrary' ||
      this.props.location.pathname === '/YourLibrary/Albums' ||
      this.props.location.pathname === '/YourLibrary/Artists'
        ? ''
        : 'no-display'

    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <div className={displaySearch}>
          <TrackSearch />
        </div>
        <div className="app-container">
          <div className="left-side-section">
            <SideMenu />
          </div>

          <div className="main-section">
            <div className={displayYourLibrary}>
              <YourLibraryNavigation />
            </div>
            <div className={displaySearch}>
              <SearchNavigation />
            </div>
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
              <Route exact path="/YourLibrary/Artists" render={props => <MyArtistList />} />
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
                render={props => <SearchAlbumList audioControl={this.audioControl} />}
              />
              <Route exact path="/Search/Artists" render={props => <ArtistList />} />
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
  pauseSong: PropTypes.func,
  playSong: PropTypes.func,
  stopSong: PropTypes.func,
  resumeSong: PropTypes.func,
  volume: PropTypes.number,
}

const mapStateToProps = state => {
  return {
    volume: state.soundReducer.volume,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
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
