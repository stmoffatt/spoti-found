import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './trackSearch.css'

class TrackSearch extends Component {
  state = {
    searchText: '',
  }

  updateSearchText = e => {
    this.setState(
      {
        searchText: e.target.value,
      },
      this.handleChange(e.target.value),
    )
  }

  handleChange = e => {
    this.props.searchSongs(e)
    this.props.searchArtists(e)
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="track-search-container">
        <form
          onChange={() => {
            this.handleChange
          }}
        >
          <input onChange={this.updateSearchText} type="text" placeholder="Search..." />
          <button
            onChange={() => {
              this.handleChange
            }}
          />
        </form>
      </div>
    )
  }
}

TrackSearch.propTypes = {
  searchSongs: PropTypes.func,
  searchArtists: PropTypes.func,
  token: PropTypes.string,
  updateShowComponent: PropTypes.func,
  toggleArtistMainComponent: PropTypes.func,
}

export default TrackSearch
