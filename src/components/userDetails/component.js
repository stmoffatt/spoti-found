import React from 'react'
import PropTypes from 'prop-types'
import './userDetails.css'
const UserDetails = ({ userImage, displayName }) => {
  console.log(displayName)
  return (
    <div className="user-details-container">
      <img
        alt="user"
        className="user-image"
        src={userImage ? userImage : 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg'}
      />
      <p className="user-name">{displayName}</p>
    </div>
  )
}

UserDetails.propTypes = {
  userImage: PropTypes.string,
  displayName: PropTypes.string,
}

export default UserDetails
