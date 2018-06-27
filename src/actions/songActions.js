import SpotifyWebApi from 'spotify-web-api-js'
import uniqBy from 'lodash/uniqBy'
import { setArtistIds } from './artistActions'
const spotifyApi = new SpotifyWebApi()

export const fetchSongsSuccess = songs => {
  return {
    type: 'FETCH_SONGS_SUCCESS',
    songs,
  }
}

export const fetchSongsError = () => {
  return {
    type: 'FETCH_SONGS_ERROR',
  }
}

export const fetchSongs = () => {
  return dispatch => {
    spotifyApi
      .getMySavedTracks()
      .then(res => {
        // get all artist ids and remove duplicates
        let artistIds = uniqBy(res.items, item => {
          return item.track.artists[0].name
        })
          .map(item => {
            return item.track.artists[0].id
          })
          .join(',')

        dispatch(setArtistIds(artistIds))

        const newRes = res.items.map(item => {
          item = Object.assign({ added_at: item.added_at }, item.track)
          return {
            track: item,
          }
        })

        res.items = newRes.map(item => {
          item = Object.assign({ trackType: 'singleTrack' }, item.track)
          return {
            track: item,
          }
        })

        dispatch(fetchSongsSuccess(res.items))
      })
      .catch(err => {
        dispatch(fetchSongsError(err))
      })
  }
}

export const searchSongsSuccess = songs => {
  return {
    type: 'SEARCH_SONGS_SUCCESS',
    songs,
  }
}

export const searchSongsError = () => {
  return {
    type: 'SEARCH_SONGS_ERROR',
  }
}

export const searchSongs = (searchText, accessToken) => {
  return dispatch => {
    spotifyApi
      .searchTracks(`${searchText}`)
      .then(res => {
        res.items = res.tracks.items.map(item => {
          item = Object.assign({ trackType: 'singleTrack' }, item)
          return {
            track: item,
          }
        })
        dispatch(searchSongsSuccess(res.items))
      })
      .catch(err => {
        dispatch(fetchSongsError(err))
      })
  }
}

export const albumTracksSuccess = albumSongs => {
  return {
    type: 'ALBUM_TRACKS_SUCCESS',
    albumSongs,
  }
}

export const albumTracks = artistId => {
  return dispatch => {
    spotifyApi
      .getAlbum(`${artistId}`)
      .then(data => {
        return data.tracks.items.map(function(t) {
          return t.id
        })
      })
      .then(trackIds => {
        return spotifyApi.getTracks(trackIds)
      })
      .then(tracksInfo => {
        tracksInfo = tracksInfo.tracks.map(item => {
          item = Object.assign({ trackType: 'albumTrack' }, item)
          return {
            track: item,
          }
        })
        dispatch(albumTracksSuccess(tracksInfo))
      })
      .catch(error => {
        dispatch(albumTracksError(error))
      })
  }
}

export const albumTracksError = () => {
  return {
    type: 'ALBUM_TRACKS_ERROR',
  }
}

export const topTracksSuccess = topTracks => {
  return {
    type: 'TOP_TRACKS_SUCCESS',
    topTracks,
  }
}

export const topTracks = (artistId, countryId) => {
  return dispatch => {
    spotifyApi
      .getArtistTopTracks(`${artistId}`, `${countryId}`)
      .then(data => {
        data = data.tracks.map(item => {
          item = Object.assign({ trackType: 'topTrack' }, item)
          return {
            track: item,
          }
        })
        dispatch(topTracksSuccess(data))
      })
      .catch(error => {
        dispatch(topTracksError(error))
      })
  }
}

export const topTracksError = () => {
  return {
    type: 'TOP_TRACKS_ERROR',
  }
}

export const playSong = song => {
  return {
    type: 'PLAY_SONG',
    song,
  }
}

export const stopSong = () => {
  return {
    type: 'STOP_SONG',
  }
}

export const pauseSong = () => {
  return {
    type: 'PAUSE_SONG',
  }
}

export const resumeSong = () => {
  return {
    type: 'RESUME_SONG',
  }
}

export const increaseSongTime = time => {
  return {
    type: 'INCREASE_SONG_TIME',
    time,
  }
}

export const updateViewType = view => {
  return {
    type: 'UPDATE_VIEW_TYPE',
    view,
  }
}
