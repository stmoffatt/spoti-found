import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AlbumSongList from '../albumSongList'
import './artistMain.css'

const msToMinutesAndSeconds = ms => {
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000) / 1000).toFixed(0)
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

const ArtistMain = ({
  albums,
  artist,
  toggleMain,
  audioControl,
  resumeSong,
  pauseSong,
  searchAlbums,
  toggleArtistMainComponent,
  updateShowComponent,
  albumTracks,
  topTracks,
  songId,
  viewType,
  songPaused,
  songPlaying,
}) => {
  const renderSongs = () => {
    return topTracks.map((song, i) => {
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
            <p>{msToMinutesAndSeconds(song.track.duration_ms)}</p>
          </div>
        </li>
      )
    })
  }

  const render = () => {
    return toggleMain ? (
      <AlbumSongList resumeSong={resumeSong} pauseSong={pauseSong} audioControl={audioControl} />
    ) : albums.length > 0 ? (
      <div>
        <h3
          onClick={e => {
            e.preventDefault()
            updateShowComponent(false)
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
                  artist.images[0]
                    ? artist.images[0].url
                    : 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg'
                }
                alt="Current Artist"
              />
            </div>
            <div className="current-artist-info">
              <h3>{artist.name}</h3>
              <p>Followers: {artist.followers.total}</p>
            </div>
          </div>
          <div>
            <h1>Top Tracks</h1>
            {renderSongs()}
          </div>
        </div>
        <h1>Albums</h1>
        <div className="artist-view-container">
          {albums.map((album, i) => {
            return (
              <li className="artist-item" key={i}>
                <div
                  onClick={e => {
                    e.preventDefault()
                    albumTracks(album.id)
                    setTimeout(() => {
                      toggleArtistMainComponent(true)
                    }, 300)
                  }}
                >
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
  return <div>{render()}</div>
}

ArtistMain.propTypes = {
  albums: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  artist: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  topTracks: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  songId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  viewType: PropTypes.string,
  toggleMain: PropTypes.bool,
  token: PropTypes.string,
  updateHeaderTitle: PropTypes.func,
  setAlbumIds: PropTypes.func,
  searchAlbums: PropTypes.func,
  audioControl: PropTypes.func,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func,
  toggleArtistMainComponent: PropTypes.func,
  updateShowComponent: PropTypes.func,
  albumTracks: PropTypes.func,
  songPaused: PropTypes.bool,
  songPlaying: PropTypes.bool,
}

export default ArtistMain
