const defaultState = {
  AlbumIds: '',
  viewType: 'songs',
}

export const albumsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS_SUCCESS':
      return {
        ...state,
        albums: action.albums,
        fetchAlbumsError: false,
      }

    case 'FETCH_ALBUMS_ERROR':
      return {
        ...state,
        fetchAlbumsError: true,
      }

    case 'SEARCH_ALBUMS_PENDING':
      return {
        ...state,
        searchAlbumsPending: true,
      }

    case 'SEARCH_ALBUMS_SUCCESS':
      return {
        ...state,
        albums: action.albums,
        searchAlbumsError: false,
        searchAlbumsPending: false,
      }

    case 'SEARCH_ALBUMS_ERROR':
      return {
        ...state,
        searchAlbumsError: true,
        searchAlbumsPending: false,
      }

    case 'SET_ALBUM_IDS':
      return {
        ...state,
        albumIds: action.albumIds,
      }

    default:
      return state
  }
}

export default albumsReducer
