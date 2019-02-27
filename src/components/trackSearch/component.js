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
          onChange={e => {
            this.handleChange(e)
          }}
        >
          <input onChange={this.updateSearchText} type="text" placeholder="Search..." />
          <button
            onChange={e => {
              this.handleChange(e)
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
}

export default TrackSearch
