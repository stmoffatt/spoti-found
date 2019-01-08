import SpotifyWebApi from 'spotify-web-api-js'
const spotifyApi = new SpotifyWebApi()

export const searchArtistsSuccess = artists => {
  return {
    type: 'SEARCH_ARTISTS_SUCCESS',
    artists,
  }
}

export const searchArtistsError = () => {
  return {
    type: 'SEARCH_ARTISTS_ERROR',
  }
}

export const searchArtists = searchText => {
  return dispatch => {
    if (searchText.length > 0) {
      spotifyApi
        .searchArtists(`${searchText}`, { limit: 24 })
        .then(res => {
          res.artists = res.artists.items.map(item => {
            return {
              artist: item,
            }
          })
          dispatch(searchArtistsSuccess(res.artists))
        })
        .catch(err => {
          dispatch(searchArtistsError(err))
        })
    } else {
      dispatch(searchArtistsSuccess(null))
    }
  }
}

export const getArtistSuccess = artist => {
  return {
    type: 'GET_ARTIST_SUCCESS',
    artist,
  }
}

export const getArtist = artistId => {
  return dispatch => {
    spotifyApi
      .getArtist(`${artistId}`)
      .then(res => {
        dispatch(getArtistSuccess(res))
      })
      .catch(err => {
        dispatch(getArtistError(err))
      })
  }
}

export const getArtistError = () => {
  return {
    type: 'GET_ARTIST_ERROR',
  }
}

export const setArtistIds = artistIds => {
  return {
    type: 'SET_ARTIST_IDS',
    artistIds,
  }
}

export const updateArtistId = artistId => {
  return {
    type: 'UPDATE_ARTIST_ID',
    artistId,
  }
}

export const updateViewType = view => {
  return {
    type: 'UPDATE_VIEW_TYPE',
    view,
  }
}

export const updateShowComponent = show => {
  return {
    type: 'UPDATE_SHOW_COMPONENT',
    show,
  }
}

export const toggleArtistMainComponent = toggle => {
  return {
    type: 'TOGGLE_ARTIST_MAIN_COMPONENT',
    toggle,
  }
}
