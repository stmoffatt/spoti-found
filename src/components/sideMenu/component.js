import React from 'react'
import PropTypes from 'prop-types'
import './sideMenu.css'
import TrackSearch from '../trackSearch'
import { Link } from 'react-router-dom'
import UserDetails from '../userDetails'

const SideMenu = ({
  updateHeaderTitle,
  updateViewType,
  updateShowComponent,
  updateSearchTitle,
  fetchSongs,
  fetchAlbums,
  searchArtists,
  token,
  title,
  artistIds,
  toggleArtistMainComponent,
  updateSideBarContent,
  updateLibraryList,
}) => {
  const handleClick = name => {
    if (name == 'Your Library') {
      updateHeaderTitle(name)
      updateSearchTitle('Songs')
      updateViewType(name)
      updateSideBarContent(true)
      window.scrollTo(0, 0)
    } else {
      updateHeaderTitle(name)
      updateSearchTitle(name)
      updateViewType(name)
      updateSideBarContent(false)
      window.scrollTo(0, 0)
    }
  }

  const renderSideMenu = () => {
    const menu = [
      {
        name: 'Your Library',
        header: 'Your Library',
        link: '/YourLibrary',
      },
      {
        name: 'Search',
        header: 'SearchedSongs',
        link: '/Search',
      },
    ]

    return menu.map(item => {
      return (
        <li
          key={item.header}
          className={title === item.header ? 'active side-menu-item' : 'side-menu-item'}
          onClick={() => {
            handleClick(item.header)
            updateLibraryList(false)
          }}
        >
          <Link to={item.link}>{item.name}</Link>
        </li>
      )
    })
  }

  return (
    <div className="side-bar-container">
      <ul className="side-menu-container">{renderSideMenu()}</ul>
      <UserDetails />
    </div>
  )
}

SideMenu.propTypes = {
  updateHeaderTitle: PropTypes.func,
  updateViewType: PropTypes.func,
  updateSearchTitle: PropTypes.func,
  fetchSongs: PropTypes.func,
  fetchAlbums: PropTypes.func,
  searchArtists: PropTypes.func,
  token: PropTypes.string,
  artistIds: PropTypes.string,
  title: PropTypes.string,
  updateShowComponent: PropTypes.func,
  toggleArtistMainComponent: PropTypes.func,
  updateSideBarContent: PropTypes.func,
  updateLibraryList: PropTypes.func,
}

export default SideMenu
