import React from 'react'
import PropTypes from 'prop-types'
import SongList from '../songList'
import AlbumList from '../albumList'
import ArtistList from '../artistList'

const MainView = ({ headerTitle, audioControl, resumeSong, pauseSong }) => {
  return (
    <div>
      {headerTitle === 'Albums' ? (
        <AlbumList audioControl={audioControl} />
      ) : headerTitle === 'Artists' ? (
        <ArtistList resumeSong={resumeSong} pauseSong={pauseSong} audioControl={audioControl} />
      ) : (
        //anything else show SongList
        <SongList resumeSong={resumeSong} pauseSong={pauseSong} audioControl={audioControl} />
      )}
    </div>
  )
}

MainView.propTypes = {
  headerTitle: PropTypes.string,
  audioControl: PropTypes.func,
  albumAudioControl: PropTypes.func,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func,
}

export default MainView
