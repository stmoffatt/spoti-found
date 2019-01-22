import React from 'react'
import PropTypes from 'prop-types'
import UserDetails from '../userDetails'
import './yourLibrary.css'

const YourLibrary = ({
  updateHeaderTitle,
  updateSearchTitle,
  updateViewType,
  updateShowComponent,
  fetchSongs,
  fetchAlbums,
  searchArtists,
  searchSongs,
  searchAlbums,
  token,
  title,
  searchTitle,
  artistIds,
  toggleArtistMainComponent,
  content,
  library,
}) => {
  const handleClick = name => {
    updateSearchTitle(name)
    updateViewType(name)
    window.scrollTo(0, 0)
    setTimeout(() => {
      updateShowComponent(false)
      toggleArtistMainComponent(false)
    }, 300)
  }
  const renderYourLibrary = () => {
    const menu = [
      {
        name: 'Songs',
        header: 'Songs',
        action: fetchSongs,
      },
      {
        name: 'Albums',
        header: 'Albums',
        action: fetchAlbums,
      },
      {
        name: 'Artists',
        header: 'Artists',
        action: fetchSongs,
      },
    ]

    return menu.map(item => {
      return (
        <li
          key={('header 1', item.header)}
          className={searchTitle === item.header ? 'active search-menu-item' : 'search-menu-item'}
          onClick={() => {
            item.getArtists ? item.action(token, artistIds) : item.action(token)
            handleClick(item.header)
          }}
        >
          {item.name}
        </li>
      )
    })
  }
  const renderYourSearch = () => {
    const searchMenu = [
      {
        name: 'Songs',
        header: 'SearchedSongs',
        action: searchSongs,
      },
      {
        name: 'Albums',
        header: 'SearchedAlbums',
        action: searchAlbums,
      },
      {
        name: 'Artists',
        header: 'SearchedArtists',
        action: searchArtists,
      },
    ]
    return searchMenu.map(item => {
      return (
        <li
          key={item.header}
          className={searchTitle === item.header ? 'active search-menu-item' : 'search-menu-item'}
          onClick={() => {
            handleClick(item.header)
          }}
        >
          {item.name}
        </li>
      )
    })
  }
  return (
    <div className={library ? 'no-display' : ''}>
      <div className={content || title === 'Your Library' ? 'no-display' : ''}>
        <ul className="search-menu-container">{renderYourSearch()}</ul>
      </div>
      <div className={content || title === 'Your Library' ? '' : 'no-display'}>
        <ul className="search-menu-container">{renderYourLibrary()}</ul>
      </div>
    </div>
  )
}

YourLibrary.propTypes = {
  content: PropTypes.bool,
  library: PropTypes.bool,
  updateHeaderTitle: PropTypes.func,
  updateSearchTitle: PropTypes.func,
  updateViewType: PropTypes.func,
  fetchSongs: PropTypes.func,
  fetchAlbums: PropTypes.func,
  searchSongs: PropTypes.func,
  searchArtists: PropTypes.func,
  searchAlbums: PropTypes.func,
  token: PropTypes.string,
  artistIds: PropTypes.string,
  title: PropTypes.string,
  searchTitle: PropTypes.string,
  updateShowComponent: PropTypes.func,
  toggleArtistMainComponent: PropTypes.func,
}

export default YourLibrary
