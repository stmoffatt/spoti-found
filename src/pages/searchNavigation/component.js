import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './searchNavigation.css'

const SearchNavigation = ({ updateSearchTitle, searchTitle }) => {
  const handleClick = name => {
    updateSearchTitle(name)
    window.scrollTo(0, 0)
  }
  const renderYourSearch = () => {
    const searchMenu = [
      {
        name: 'Songs',
        header: 'SearchedSongs',
        link: '/Search',
      },
      {
        name: 'Albums',
        header: 'SearchedAlbums',
        link: '/Search/Albums',
      },
      {
        name: 'Artists',
        header: 'SearchedArtists',
        link: '/Search/Artists',
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
          <Link to={item.link}> {item.name}</Link>
        </li>
      )
    })
  }
  return (
    <div>
      <div>
        <ul className="search-menu-container">{renderYourSearch()}</ul>
      </div>
    </div>
  )
}

SearchNavigation.propTypes = {
  updateSearchTitle: PropTypes.func,
  searchTitle: PropTypes.string,
}

export default SearchNavigation
