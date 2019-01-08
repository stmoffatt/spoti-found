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

export const updateSideBarContent = content => {
  return {
    type: 'UPDATE_SIDE_BAR_CONTENT',
    content,
  }
}
