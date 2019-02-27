const defaultState = {
  title: 'Your Library',
  searchTitle: 'Songs',
}

export const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_HEADER_TITLE':
      return {
        ...state,
        title: action.title,
      }
    case 'UPDATE_SEARCH_TITLE':
      return {
        ...state,
        searchTitle: action.searchTitle,
      }

    default:
      return state
  }
}

export default uiReducer
