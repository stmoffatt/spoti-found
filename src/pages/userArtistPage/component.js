import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArtistList from '../../components/artistList'

class UserArtistPage extends Component {
  render() {
    return <ArtistList data={this.props.myArtists} />
  }
}
UserArtistPage.propTypes = {
  myArtists: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export default UserArtistPage
