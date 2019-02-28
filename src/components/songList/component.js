import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import './songList.css'

const SongList = ({
  data,
  audioControl,
  songPaused,
  songPlaying,
  resumeSong,
  pauseSong,
  deleteTrack,
  currentPlayingSong,
  songId,
  isLoggedIn,
  savedSongIds,
  addSongToLibrary,
}) => {
  const msToMinutesAndSeconds = ms => {
    const minutes = Math.floor(ms / 60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  const renderSongs = () => {
    return data.length > 0 ? (
      data.map((song, i) => {
        const buttonClass = song.track.id === songId && !songPaused ? 'fa-pause-circle-o' : 'fa-play-circle-o'

        return (
          <li className={song.track.id === songId ? 'active user-song-item' : 'user-song-item'} key={i}>
            <div
              onClick={() => {
                song.track.id === songId && songPlaying && songPaused
                  ? resumeSong()
                  : songPlaying && !songPaused && song.track.id === songId
                  ? pauseSong()
                  : audioControl(song)
                currentPlayingSong(data)
              }}
              className="play-song"
            >
              <i className={`fa ${buttonClass} play-btn`} aria-hidden="true" />
            </div>

            <div
              className="add-song"
              onClick={() => {
                addSongToLibrary(song.track.id)
              }}
            >
              {savedSongIds.some(r => song.track.id.includes(r)) === true ? <span> </span> : <p>+</p>}
            </div>

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
              <p>{msToMinutesAndSeconds(song.track.duration_ms)}</p>
            </div>
            <div
              className={window.location.pathname === '/YourLibrary' ? 'delete-button' : 'no-display'}
              onClick={() => {
                deleteTrack(song.track.id)
              }}
            >
              <p>-</p>
            </div>
          </li>
        )
      })
    ) : (
      <div />
    )
  }
  if (!isLoggedIn) return <Redirect to="/" />
  return data.length > 0 ? (
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
      {data && renderSongs()}
    </div>
  ) : (
    <div />
  )
}

SongList.propTypes = {
  songId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  savedSongIds: PropTypes.array,
  addSongToLibrary: PropTypes.func,
  audioControl: PropTypes.func,
  songPaused: PropTypes.bool,
  songPlaying: PropTypes.bool,
  resumeSong: PropTypes.func,
  deleteTrack: PropTypes.func,
  pauseSong: PropTypes.func,
  currentPlayingSong: PropTypes.func,
  isLoggedIn: PropTypes.bool,
}

export default SongList
