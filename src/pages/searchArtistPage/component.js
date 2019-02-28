import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArtistList from '../../components/artistList'

class SearchArtistPage extends Component {
  render() {
    return <ArtistList data={this.props.artists} />
  }
}
SearchArtistPage.propTypes = {
  artists: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export default SearchArtistPage
