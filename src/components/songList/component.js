import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './songList.css'

class SongList extends Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.songs) {
      this.props.fetchSongs()
    }
  }
  msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  renderSongs() {
    return this.props.songs.length > 0 ? (
      this.props.songs.map((song, i) => {
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
                  : this.props.audioControl(song),
                  this.props.currentPlayingSong(this.props.songs)
              }}
              className="play-song"
            >
              <i className={`fa ${buttonClass} play-btn`} aria-hidden="true" />
            </div>

            <div className="song-title">
              <p className="tracklist-margin-left">{song.track.name}</p>
            </div>

            <div className="song-artist">
              <p className="tracklist-margin-left">{song.track.artists[0].name}</p>
            </div>

            <div className="song-album">
              <p className="tracklist-margin-left">{song.track.album.name}</p>
            </div>

            <div className="song-length song-length-width">
              <p className="tracklist-margin-left">{this.msToMinutesAndSeconds(song.track.duration_ms)}</p>
            </div>
          </li>
        )
      })
    ) : (
      <span />
    )
  }

  render() {
    return (
      <div>
        <div className="song-header-container">
          <div className="song-title-header">
            <p>Title</p>
          </div>
          <div className="song-artist-header">
            <p>Artist</p>
          </div>
          <div className="song-album-header">
            <p>Album</p>
          </div>
          <div className="song-length-header">
            <p>
              <i className="fa fa-clock-o" aria-hidden="true" />
            </p>
          </div>
        </div>
        {this.props.songs && this.renderSongs()}
      </div>
    )
  }
}

SongList.propTypes = {
  viewType: PropTypes.string,
  token: PropTypes.string,
  songAddedId: PropTypes.string,
  songId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  songs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  CurrentPlayingSongList: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fetchSongsError: PropTypes.bool,
  fetchSongs: PropTypes.func,
  audioControl: PropTypes.func,
  songPaused: PropTypes.bool,
  songPlaying: PropTypes.bool,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func,
  currentPlayingSong: PropTypes.func,
  addSongToLibrary: PropTypes.func,
}

export default SongList
