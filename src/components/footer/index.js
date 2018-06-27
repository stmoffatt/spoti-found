import React from 'react'
import PropTypes from 'prop-types'
import SongControls from '../songControls'
import VolumeControls from '../volumeControl'
import './Footer.css'

const Footer = ({ stopSong, pauseSong, resumeSong, audioControl }) => {
  return (
    <div className="footer">
      <SongControls stopSong={stopSong} pauseSong={pauseSong} resumeSong={resumeSong} audioControl={audioControl} />
      <VolumeControls />
    </div>
  )
}

Footer.propTypes = {
  stopSong: PropTypes.func,
  pauseSong: PropTypes.func,
  resumeSong: PropTypes.func,
  audioControl: PropTypes.func,
}

export default Footer
