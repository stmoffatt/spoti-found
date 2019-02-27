import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Redirect } from 'react-router-dom'
import './artistMain.css'

class ArtistMain extends Component {
  msToMinutesAndSeconds = ms => {
    const minutes = Math.floor(ms / 60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  renderSongs() {
    return this.props.topTracks.map((song, i) => {
      const buttonClass =
        song.track.id === this.props.songId && !this.props.songPaused ? 'fa-pause-circle-o' : 'fa-play-circle-o'

      return (
        <li className={song.track.id === this.props.songId ? 'active user-song-item' : 'user-song-item'} key={i}>
          <div
            onClick={() => {
              song.track.id === this.props.songId && this.props.songPlaying && this.props.songPaused
                ? this.props.resumeSong()
                : this.props.songPlaying && !this.props.songPaused && song.track.id === this.props.songId
                ? this.props.pauseSong()
                : this.props.audioControl(song)
              this.props.currentPlayingSong(this.props.topTracks)
            }}
            className="play-song"
          >
            <i className={`fa ${buttonClass} play-btn`} aria-hidden="true" />
          </div>

          <div className="song-title">
            <p>{song.track.name}</p>
          </div>

          <div className="song-album">
            <p>{song.track.album.name}</p>
          </div>

          <div className="song-length">
            <p>{this.msToMinutesAndSeconds(song.track.duration_ms)}</p>
          </div>
        </li>
      )
    })
  }

  render() {
    if (!this.props.isLoggedIn) return <Redirect to="/" />
    return this.props.albums.length > 0 ? (
      <div>
        <h3
          onClick={() => {
            this.props.history.goBack()
            window.scrollTo(0, 0)
          }}
        >
          back
        </h3>
        <div className="current-artist-header-container">
          <div className="current-artist">
            <div>
              <img
                className="current-artist-image"
                src={
                  this.props.artist.images[0]
                    ? this.props.artist.images[0].url
                    : 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg'
                }
                alt="Current Artist"
              />
            </div>
            <div className="current-artist-info">
              <h3>{this.props.artist.name}</h3>
              <p>Followers: {this.props.artist.followers.total}</p>
            </div>
          </div>
          <div>
            <h1>Top Tracks</h1>
            {this.renderSongs()}
          </div>
        </div>
        <h1>Albums</h1>
        <div className="artist-view-container">
          {this.props.albums.map((album, i) => {
            const handleClick = () => {
              this.props.albumTracks(album.id)
              setTimeout(() => {
                window.scrollTo(0, 0)
                this.props.history.push('/AlbumMain')
              }, 500)
            }
            return (
              <li className="artist-item" key={i}>
                <div onClick={handleClick}>
                  <div className="artist-image">
                    <img
                      src={
                        album.images[0]
                          ? album.images[0].url
                          : 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg'
                      }
                      alt="Album Artwork"
                    />
                  </div>
                </div>
                <div className="artist-details">
                  <p>{album.name} </p>
                </div>
              </li>
            )
          })}
        </div>
      </div>
    ) : (
      <span />
    )
  }
}

ArtistMain.propTypes = {
  albums: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  artist: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  topTracks: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  songId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  audioControl: PropTypes.func,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func,
  albumTracks: PropTypes.func,
  songPaused: PropTypes.bool,
  currentPlayingSong: PropTypes.func,
  songPlaying: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
}
export default withRouter(ArtistMain)
