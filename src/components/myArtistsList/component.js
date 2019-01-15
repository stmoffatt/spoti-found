import React from 'react'
import PropTypes from 'prop-types'
import ArtistMain from '../artistMain'
import './myArtistList.css'

const MyArtistList = ({
  audioControl,
  resumeSong,
  pauseSong,
  myArtists,
  searchArtists,
  token,
  updateHeaderTitle,
  showComponent,
  updateShowComponent,
  updateArtistId,
  searchAlbums,
  getArtist,
  albums,
  topTracks,
  user,
}) => {
  const render = () => {
    return showComponent ? (
      <ArtistMain resumeSong={resumeSong} pauseSong={pauseSong} audioControl={audioControl} />
    ) : myArtists.artists.length > 0 ? (
      myArtists.artists.map((artist, i) => {
        return (
          <li className="artist-item" key={i}>
            <div
              onClick={e => {
                e.preventDefault()
                searchAlbums(artist.id)
                getArtist(artist.id)
                topTracks(artist.id, user.country)
                setTimeout(() => {
                  updateShowComponent(true)
                }, 200)
              }}
            >
              <div className="artist-image">
                <img
                  src={
                    artist.images[0]
                      ? artist.images[0].url
                      : 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg'
                  }
                  alt="Artist"
                />
              </div>
              <div className="artist-details">
                <h4>{artist.name} </h4>
              </div>
            </div>
          </li>
        )
      })
    ) : (
      <span />
    )
  }
  return <ul className="artist-view-container">{render()}</ul>
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
  getArtist: PropTypes.func,
  topTracks: PropTypes.func,
}

export default MyArtistList
