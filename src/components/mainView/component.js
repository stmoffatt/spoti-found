import React from 'react'
import PropTypes from 'prop-types'
import SongList from '../songList'
import SearchSongList from '../searchSongList'
import AlbumList from '../albumList'
import ArtistList from '../artistList'
import SearchedAlbumList from '../searchedAlbumList'
import MyArtistList from '../myArtistsList'

const MainView = ({ headerTitle, audioControl, resumeSong, pauseSong }) => {
  return (
    <div>
      {headerTitle === 'Albums' ? (
        <AlbumList audioControl={audioControl} />
      ) : headerTitle === 'Artists' ? (
        <MyArtistList resumeSong={resumeSong} pauseSong={pauseSong} audioControl={audioControl} />
      ) : headerTitle === 'Songs' ? (
        //anything else show SongList
        <SongList resumeSong={resumeSong} pauseSong={pauseSong} audioControl={audioControl} />
      ) : headerTitle === 'SearchedSongs' ? (
        <SearchSongList resumeSong={resumeSong} pauseSong={pauseSong} audioControl={audioControl} />
      ) : headerTitle === 'SearchedAlbums' ? (
        <SearchedAlbumList audioControl={audioControl} />
      ) : (
        <ArtistList resumeSong={resumeSong} pauseSong={pauseSong} audioControl={audioControl} />
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
