import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './volumeControl.css'

class VolumeControls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      volume: props.volume,
    }
  }

  updateVolume = e => {
    this.setState({
      volume: e.target.value,
    })

    this.props.updateVolume(Math.ceil(e.target.value / 10) * 10)
  }

  muteVolume = () => {
    if (this.state.volume >= 1) {
      this.setState({
        volume: 0,
      })
      this.props.updateVolume(Math.ceil(0 / 10) * 10)
    } else {
      this.setState({
        volume: 100,
      })
      this.props.updateVolume(Math.ceil(100 / 10) * 10)
    }
  }

  renderVolumeIcon() {
    if (this.state.volume >= 50) {
      return <i className="fa fa-volume-up" onClick={this.muteVolume} aria-hidden="true" />
    } else if (this.state.volume >= 1 && this.state.volume <= 49) {
      return <i className="fa fa-volume-down" onClick={this.muteVolume} aria-hidden="true" />
    } else {
      return <i className="fa fa-volume-off" onClick={this.muteVolume} aria-hidden="true" />
    }
  }

  render() {
    return (
      <div className="volume-container">
        {this.renderVolumeIcon()}
        <input
          className="volume"
          type="range"
          min={0}
          max={100}
          value={this.state.volume}
          onChange={this.updateVolume}
        />
      </div>
    )
  }
}

VolumeControls.propTypes = {
  volume: PropTypes.number,
  updateVolume: PropTypes.func,
}

export default VolumeControls
