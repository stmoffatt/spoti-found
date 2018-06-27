import SpotifyWebApi from 'spotify-web-api-js'
const spotifyApi = new SpotifyWebApi()

export const fetchUserSuccess = user => {
  return {
    type: 'FETCH_USER_SUCCESS',
    user,
  }
}

export const fetchUserError = () => {
  return {
    type: 'FETCH_USER_ERROR',
  }
}

export const fetchUser = () => {
  return dispatch => {
    spotifyApi
      .getMe()
      .then(res => {
        dispatch(fetchUserSuccess(res))
      })
      .catch(err => {
        dispatch(fetchUserError(err))
      })
  }
}

export const addSongToLibrarySuccess = songId => {
  return {
    type: 'ADD_SONG_TO_LIBRARY_SUCCESS',
    songId,
  }
}

export const addSongToLibraryError = () => {
  return {
    type: 'ADD_SONG_TO_LIBRARY_ERROR',
  }
}

export const addSongToLibrary = id => {
  return dispatch => {
    spotifyApi
      .addToMySavedTracks([`${id}`])
      .then(res => {
        dispatch(addSongToLibrarySuccess(id))
      })
      .catch(err => {
        dispatch(addSongToLibraryError(err))
      })
  }
}
