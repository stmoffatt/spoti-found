import { combineReducers } from 'redux'
import userReducer from './userReducer'
import tokenReducer from './tokenReducer'
import songsReducer from './songsReducer'
import albumsReducer from './albumsReducer'
import artistsReducer from './artistsReducer'
import soundReducer from './soundReducer'
import uiReducer from './uiReducer'

export default combineReducers({
  userReducer,
  tokenReducer,
  songsReducer,
  albumsReducer,
  artistsReducer,
  soundReducer,
  uiReducer,
})
