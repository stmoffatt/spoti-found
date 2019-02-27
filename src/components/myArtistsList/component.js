import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Redirect } from 'react-router-dom'
import './myArtistList.css'

class MyArtistList extends Component {
  renderSongs() {
    return this.props.myArtists.artists ? (
      this.props.myArtists.artists.map((artist, i) => {
        const handleClick = () => {
          this.props.searchAlbums(artist.id)
          this.props.getArtist(artist.id)
          this.props.topTracks(artist.id, this.props.user.country)
          setTimeout(() => {
            window.scrollTo(0, 0)
            this.props.history.push('/ArtistMain')
          }, 500)
        }
        return (
          <li className="artist-item" key={i} onClick={handleClick}>
            <div className="artist-image">
              <img
                src={
                  artist.images[0]
                    ? artist.images[0].url
                    : 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg'
                }
                alt="Artist"
              />

              <div className="artist-details">
                <h4>{artist.name}</h4>
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

MyArtistList.propTypes = {
  myArtists: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  searchAlbums: PropTypes.func,
  getArtist: PropTypes.func,
  topTracks: PropTypes.func,
  isLoggedIn: PropTypes.bool,
}

export default withRouter(MyArtistList)
