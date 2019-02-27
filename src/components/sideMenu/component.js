import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './sideMenu.css'
import { withRouter } from 'react-router-dom'
import UserDetails from '../userDetails'

class SideMenu extends Component {
  handleClick = (name, link) => {
    if (name === 'Your Library') {
      this.props.updateHeaderTitle(name)
      this.props.updateSearchTitle('Songs')
      this.props.history.push(link)
      window.scrollTo(0, 0)
    } else {
      this.props.updateHeaderTitle(name)
      this.props.updateSearchTitle(name)
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
  updateSearchTitle: PropTypes.func,
  updateHeaderTitle: PropTypes.func,
  title: PropTypes.string,
}

export default withRouter(SideMenu)
