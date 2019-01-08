import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './albumSongList.css'

class AlbumSongList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  renderAlbumSongs() {
    return this.props.albumSongs.map((song, i) => {
      const buttonClass =
        song.track.id === this.props.songId && !this.props.songPaused ? 'fa-pause-circle-o' : 'fa-play-circle-o'

      return (
        <li className={song.track.id === this.props.songId ? 'active album-song-item' : 'album-song-item'} key={i}>
          <div
            onClick={() => {
              song.track.id === this.props.songId && this.props.songPlaying && this.props.songPaused
                ? this.props.resumeSong()
                : this.props.songPlaying && !this.props.songPaused && song.track.id === this.props.songId
                ? this.props.pauseSong()
                : this.props.audioControl(song),
                this.props.currentPlayingSong(this.props.albumSongs)
            }}
            className={song.track.id === this.props.songId ? 'active play-song' : 'play-song'}
          >
            <i className={`fa ${buttonClass} play-btn`} aria-hidden="true" />
          </div>

          <div className="album-song-title">
            <p>{song.track.name}</p>
          </div>

          <div className="album-song-length">
            <p>{this.msToMinutesAndSeconds(song.track.duration_ms)}</p>
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="album-song-list-container">
          <div className="album-current-artist">
            <div className="album-art">
              <img
                src={
                  this.props.albumSongs[0].track.album.images[0]
                    ? this.props.albumSongs[0].track.album.images[0].url
                    : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
                }
                alt="Album Art"
              />
            </div>
            <div className="album-side-details">
              <h1>{this.props.albumSongs[0].track.album.name}</h1>
              <h3 id="artist-name">{this.props.albumSongs[0].track.artists[0].name}</h3>
              <p id="album-date">
                {this.props.albumSongs[0].track.album.release_date.slice(0, 4)} • {this.props.albumSongs.length} Songs
              </p>
            </div>
          </div>
          <div className="album-songs">{this.props.albumSongs && this.renderAlbumSongs()}</div>
        </div>
        <h3
          style={{ cursor: 'pointer' }}
          onClick={e => {
            e.preventDefault()
            this.props.toggleArtistMainComponent(false)
          }}
        >
          back
        </h3>
      </div>
    )
  }
}

AlbumSongList.propTypes = {
  viewType: PropTypes.string,
  token: PropTypes.string,
  songAddedId: PropTypes.string,
  albumIds: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  songId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  albumSongs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  CurrentPlayingSongList: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fetchPlaylistSongsPending: PropTypes.bool,
  albumAudioControl: PropTypes.func,
  songPaused: PropTypes.bool,
  songPlaying: PropTypes.bool,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func,
  addSongToLibrary: PropTypes.func,
  albumTracks: PropTypes.func,
  currentPlayingSong: PropTypes.func,
  toggleArtistMainComponent: PropTypes.func,
}

export default AlbumSongList
