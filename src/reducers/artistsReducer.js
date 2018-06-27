const defaultState = {
  artistIds: '',
  artistId: '',
  showComponent: false,
  toggleMain: false,
}

export const artistsReducer = (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_ARTIST_IDS':
      return {
        ...state,
        artistIds: action.artistIds,
      }
    case 'UPDATE_ARTIST_ID':
      return {
        ...state,
        artistId: action.artistId,
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
    case 'UPDATE_SHOW_COMPONENT':
      return {
        ...state,
        showComponent: action.show,
      }
    case 'TOGGLE_ARTIST_MAIN_COMPONENT':
      return {
        ...state,
        toggleMain: action.toggle,
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
