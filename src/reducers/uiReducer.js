const defaultState = {
  title: 'Your Library',
  content: true,
  searchTitle: 'Songs',
  library: false,
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
    case 'UPDATE_SIDE_BAR_CONTENT':
      return {
        ...state,
        content: action.content,
      }

    case 'UPDATE_LIBRARY_LIST':
      return {
        ...state,
        library: action.library,
      }

    default:
      return state
  }
}

export default uiReducer
