import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './trackSearch.css'

class TrackSearch extends Component {
  state = {
    searchText: '',
  }

  updateSearchText = e => {
    this.setState({
      searchText: e.target.value,
    })
  }

  render() {
    return (
      <div className="track-search-container">
        <form
          onSubmit={() => {
            this.props.searchSongs(this.state.searchText)
            this.props.searchArtists(this.state.searchText)
            setTimeout(() => {
              this.props.updateShowComponent(false)
              this.props.toggleArtistMainComponent(false)
            }, 300)
          }}
        >
          <input onChange={this.updateSearchText} type="text" placeholder="Search..." />
          <button
            onClick={e => {
              e.preventDefault()
              this.props.searchSongs(this.state.searchText)
              this.props.searchArtists(this.state.searchText)
              setTimeout(() => {
                this.props.updateShowComponent(false)
                this.props.toggleArtistMainComponent(false)
              }, 300)
            }}
          >
            <i className="fa fa-search search" aria-hidden="true" />
          </button>
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
