import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Redirect } from 'react-router-dom'
import './artistList.css'

class ArtistList extends Component {
  renderSongs() {
    return this.props.artists.length > 0 ? (
      this.props.artists.map((artist, i) => {
        const handleClick = () => {
          this.props.searchAlbums(artist.artist.id)
          this.props.getArtist(artist.artist.id)
          this.props.topTracks(artist.artist.id, this.props.user.country)
          setTimeout(() => {
            window.scrollTo(0, 0)
            this.props.history.push('/ArtistMain')
          }, 500)
        }
        return (
          <li className="artist-item" key={i} onClick={handleClick}>
            <div>
              <div className="artist-image">
                <img
                  src={
                    artist.artist.images[0]
                      ? artist.artist.images[0].url
                      : 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg'
                  }
                  alt="Artist"
                />
              </div>
              <div className="artist-details">
                <h4>{artist.artist.name} </h4>
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
    if (!this.props.isLoggedIn) return <Redirect to="/" />
    return <ul className="artist-view-container">{this.renderSongs()}</ul>
  }
}
ArtistList.propTypes = {
  artists: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  searchAlbums: PropTypes.func,
  getArtist: PropTypes.func,
  topTracks: PropTypes.func,
  isLoggedIn: PropTypes.bool,
}

export default withRouter(ArtistList)
