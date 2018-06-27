import SpotifyWebApi from 'spotify-web-api-js'
import uniqBy from 'lodash/uniqBy'
const spotifyApi = new SpotifyWebApi()

export const fetchAlbumsSuccess = albums => {
  return {
    type: 'FETCH_ALBUMS_SUCCESS',
    albums,
  }
}

export const fetchAlbumsError = () => {
  return {
    type: 'FETCH_ALBUMS_ERROR',
  }
}

export const fetchAlbums = () => {
  return dispatch => {
    spotifyApi
      .getMySavedAlbums()
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch(fetchAlbumsSuccess(res.items))
      })
      .catch(err => {
        dispatch(fetchAlbumsError(err))
      })
  }
}

export const searchAlbumsSuccess = albums => {
  return {
    type: 'SEARCH_ALBUMS_SUCCESS',
    albums,
  }
}

export const searchAlbumsError = () => {
  return {
    type: 'SEARCH_ALBUMS_ERROR',
  }
}

export const searchAlbums = artistId => {
  return dispatch => {
    spotifyApi
      .getArtistAlbums(`${artistId}`)
      .then(res => {
        res.albums = uniqBy(res.items, item => {
          if (item.album_type === 'album' || item.album_type === 'compilation') {
            return item.name
          }
        })

        dispatch(searchAlbumsSuccess(res.albums))
      })
      .catch(err => {
        dispatch(searchAlbumsError(err))
      })
  }
}

export const setAlbumIds = albumIds => {
  return {
    type: 'SET_ALBUM_IDS',
    albumIds,
  }
}
