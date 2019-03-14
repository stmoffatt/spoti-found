import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './yourLibraryNavigation.css'

const YourLibraryNavigation = ({ updateSearchTitle, searchTitle }) => {
  const handleClick = name => {
    updateSearchTitle(name)
    window.scrollTo(0, 0)
  }
  const renderYourLibrary = () => {
    const menu = [
      {
        name: 'Songs',
        header: 'Songs',
        link: '/YourLibrary',
      },
      {
        name: 'Albums',
        header: 'Albums',
        link: '/YourLibrary/Albums',
      },
      {
        name: 'Artists',
        header: 'Artists',
        link: '/YourLibrary/Artists',
      },
    ]

    return menu.map(item => {
      return (
        <li
          key={('header 1', item.header)}
          className={searchTitle === item.header ? 'active search-menu-item' : 'search-menu-item'}
          onClick={() => {
            handleClick(item.header)
          }}
        >
          <Link to={item.link}>{item.name}</Link>
        </li>
      )
    })
  }

  return (
    <div>
      <div>
        <ul className="search-menu-container">{renderYourLibrary()}</ul>
      </div>
    </div>
  )
}

YourLibraryNavigation.propTypes = {
  updateSearchTitle: PropTypes.func,
  searchTitle: PropTypes.string,
}

export default YourLibraryNavigation
