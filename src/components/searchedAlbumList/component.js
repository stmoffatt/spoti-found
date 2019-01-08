import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './searchedAlbumList.css'
class SearchedAlbumList extends Component {
  searchedRenderAlbums = () => {
    return this.props.songs.length > 0 ? (
      this.props.songs.map((song, i) => {
        return (
          <li
            onClick={() => {
              this.props.audioControl(song)
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
  render() {
    return <ul className="album-view-container">{this.searchedRenderAlbums()}</ul>
  }
}
SearchedAlbumList.propTypes = {
  songs: PropTypes.array,
  audioControl: PropTypes.func,
}

export default SearchedAlbumList
