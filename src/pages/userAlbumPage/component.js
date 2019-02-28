import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AlbumList from '../../components/albumList'

class UserAlbumList extends Component {
  componentDidMount() {
    this.props.fetchSongs()
  }
  render() {
    return <AlbumList data={this.props.songs} audioControl={this.props.audioControl} />
  }
}
UserAlbumList.propTypes = {
  songs: PropTypes.array,
  audioControl: PropTypes.func,
  fetchSongs: PropTypes.func,
}

export default UserAlbumList
