import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Redirect } from 'react-router-dom'
import './searchSongList.css'

class SearchSongList extends Component {
  msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  renderSearchedSongs() {
    return this.props.searchedSongs.map((song, i) => {
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
                this.props.currentPlayingSong(this.props.searchedSongs)
            }}
            className="play-song"
          >
            <i className={`fa ${buttonClass} play-btn`} aria-hidden="true" />
          </div>

          <p
            className="add-song"
            onClick={() => {
              this.props.addSongToLibrary(song.track.id)
              this.props.fetchSongs()
            }}
          >
            {this.props.savedSongIds.some(r => song.track.id.includes(r)) === true ? <span> </span> : <p>+</p>}
          </p>

          <div className="song-title">
            <p>{song.track.name}</p>
          </div>

          <div className="song-artist">
            <p>{song.track.artists[0].name}</p>
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
    return this.props.searchedSongs.length > 0 ? (
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
        {this.props.searchedSongs && this.renderSearchedSongs()}
      </div>
    ) : (
      <span />
    )
  }
}

SearchSongList.propTypes = {
  viewType: PropTypes.string,
  token: PropTypes.string,
  songAddedId: PropTypes.string,
  songId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  savedSongIds: PropTypes.array,
  searchedSongs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
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
  isLoggedIn: PropTypes.bool,
}

export default SearchSongList
