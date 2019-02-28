import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AlbumList from '../../components/albumList'

class SearchedAlbumPage extends Component {
  render() {
    return <AlbumList data={this.props.songs} audioControl={this.props.audioControl} />
  }
}
SearchedAlbumPage.propTypes = {
  songs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  audioControl: PropTypes.func,
}

export default SearchedAlbumPage
