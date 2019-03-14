const defaultState = {
  isLoggedIn: false,
}
export const tokenReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
        isLoggedIn: true,
      }

    default:
      return state
  }
}

export default tokenReducer
