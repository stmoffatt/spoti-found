import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SongList from '../../components/songList'

class SearchSongPage extends Component {
  render() {
    return (
      <SongList
        data={this.props.searchedSongs}
        resumeSong={this.props.resumeSong}
        pauseSong={this.props.pauseSong}
        audioControl={this.props.audioControl}
      />
    )
  }
}

SearchSongPage.propTypes = {
  searchedSongs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  audioControl: PropTypes.func,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func,
}

export default SearchSongPage
