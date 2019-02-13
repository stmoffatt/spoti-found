import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArtistMain from '../artistMain'
import { Link, withRouter, Redirect } from 'react-router-dom'
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
            this.props.updateSideBarContent(true)
            this.props.updateLibraryList(true)
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
  albums: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  searchArtists: PropTypes.func,
  token: PropTypes.string,
  updateHeaderTitle: PropTypes.func,
  showComponent: PropTypes.bool,
  updateShowComponent: PropTypes.func,
  updateArtistId: PropTypes.func,
  audioControl: PropTypes.func,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func,
  searchAlbums: PropTypes.func,
  updateSideBarContent: PropTypes.func,
  updateShowComponent: PropTypes.func,
  getArtist: PropTypes.func,
  topTracks: PropTypes.func,
  isLoggedIn: PropTypes.bool,
}

export default withRouter(MyArtistList)
