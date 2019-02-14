import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './sideMenu.css'
import TrackSearch from '../trackSearch'
import { Link, withRouter } from 'react-router-dom'
import UserDetails from '../userDetails'

class SideMenu extends Component {
  handleClick = (name, link) => {
    if (name == 'Your Library') {
      this.props.updateHeaderTitle(name)
      this.props.updateSearchTitle('Songs')
      this.props.updateViewType(name)
      this.props.history.push(link)
      window.scrollTo(0, 0)
    } else {
      this.props.updateHeaderTitle(name)
      this.props.updateSearchTitle(name)
      this.props.updateViewType(name)
      this.props.history.push(link)
      window.scrollTo(0, 0)
    }
  }

  renderSideMenu() {
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
          className={this.props.title === item.header ? 'active side-menu-item' : 'side-menu-item'}
          onClick={() => {
            this.handleClick(item.header, item.link)
          }}
        >
          {item.name}
        </li>
      )
    })
  }
  render() {
    return (
      <div className="side-bar-container">
        <ul className="side-menu-container">{this.renderSideMenu()}</ul>
        <UserDetails />
      </div>
    )
  }
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

export default withRouter(SideMenu)
