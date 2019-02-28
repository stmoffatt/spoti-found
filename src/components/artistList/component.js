import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Redirect } from 'react-router-dom'
import './artistList.css'

const ArtistList = ({ data, searchAlbums, getArtist, topTracks, user, history, isLoggedIn }) => {
  const renderSongs = () => {
    return data.length > 0 ? (
      data.map((artist, i) => {
        const handleClick = () => {
          searchAlbums(artist.artist.id)
          getArtist(artist.artist.id)
          topTracks(artist.artist.id, user.country)
          setTimeout(() => {
            window.scrollTo(0, 0)
            history.push('/ArtistMain')
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
  if (!isLoggedIn) return <Redirect to="/" />
  return <ul className="artist-view-container">{renderSongs()}</ul>
}
ArtistList.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  searchAlbums: PropTypes.func,
  getArtist: PropTypes.func,
  topTracks: PropTypes.func,
  isLoggedIn: PropTypes.bool,
}

export default withRouter(ArtistList)
