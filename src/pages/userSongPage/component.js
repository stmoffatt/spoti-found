import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SongList from '../../components/songList'

class UserSongPage extends Component {
  componentDidMount() {
    this.props.fetchSongs()
  }

  render() {
    return (
      <SongList
        data={this.props.songs}
        resumeSong={this.props.resumeSong}
        pauseSong={this.props.pauseSong}
        audioControl={this.props.audioControl}
      />
    )
  }
}

UserSongPage.propTypes = {
  songs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fetchSongs: PropTypes.func,
  audioControl: PropTypes.func,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func,
}

export default UserSongPage
