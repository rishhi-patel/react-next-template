// reducers.js
const initialState = {
  count: 0,
  isLoading: false,
  error: null,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return { ...state, isLoading: true }
    case "FETCH_POSTS_SUCCESS":
      return { ...state, isLoading: false, posts: action.payload }
    case "FETCH_POSTS_FAILURE":
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}

export default counterReducer
