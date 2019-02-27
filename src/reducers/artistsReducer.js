const defaultState = {
  artistIds: '',
}

export const artistsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_ARTIST_IDS':
      return {
        ...state,
        artistIds: action.artistIds,
      }

    case 'SEARCH_ARTISTS_PENDING':
      return {
        ...state,
        searchArtistsPending: true,
      }

    case 'SEARCH_ARTISTS_SUCCESS':
      return {
        ...state,
        artists: action.artists,
        searchArtistsError: false,
        searchArtistsPending: false,
      }

    case 'SEARCH_ARTISTS_ERROR':
      return {
        ...state,
        searchArtistsError: true,
        searchArtistsPending: false,
      }

    case 'GET_ARTIST_SUCCESS':
      return {
        ...state,
        artist: action.artist,
        getArtistError: false,
      }

    case 'GET_ARTIST_ERROR':
      return {
        ...state,
        getArtistError: true,
      }

    default:
      return state
  }
}

export default artistsReducer
