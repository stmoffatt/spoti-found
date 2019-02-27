export const updateHeaderTitle = title => {
  return {
    type: 'UPDATE_HEADER_TITLE',
    title,
  }
}

export const updateSearchTitle = searchTitle => {
  return {
    type: 'UPDATE_SEARCH_TITLE',
    searchTitle,
  }
}
