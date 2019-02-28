import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import './albumList.css'

const AlbumList = ({ data, audioControl, isLoggedIn, currentPlayingSong }) => {
  const renderAlbums = () => {
    return data.length > 0 ? (
      data.map((song, i) => {
        return (
          <li
            onClick={() => {
              audioControl(song)
              currentPlayingSong(data)
            }}
            className="album-item"
            key={i}
          >
            <div>
              <div className="album-image">
                <img src={song.track.album.images[0].url} alt="Album Artwork" />
                <div className="play-song">
                  <i className="fa fa-play-circle-o play-btn" aria-hidden="true" />
                </div>
              </div>

              <div className="album-details">
                <p className="album-name">{song.track.album.name}</p>
                <p className="artist-name">{song.track.album.artists[0].name}</p>
              </div>
            </div>
          </li>
        )
      })
    ) : (
      <span />
    )
  }
  if (!isLoggedIn) return <Redirect to="/" />
  return (
    <div>
      <ul className="album-view-container">{renderAlbums()}</ul>
    </div>
  )
}

AlbumList.propTypes = {
  data: PropTypes.array,
  audioControl: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  currentPlayingSong: PropTypes.func,
}

export default AlbumList
