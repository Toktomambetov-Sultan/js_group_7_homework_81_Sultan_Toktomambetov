const {
  CHANGE_CURRENT_LINK,
  CLEAR_CURRENT_LINK,
  SET_CURRENT_LINK,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
} = require("./actionTypes");

const initialState = {
  isLoading: false,
  error: null,
  currentLink: {
    originalUrl: "",
    shortUrl: "",
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_LINK:
      return {
        ...state,
        currentLink: {
          ...state.currentLink,
          [action.name]: action.value,
        },
      };
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case CLEAR_CURRENT_LINK:
      return { ...state, currentLink: initialState.currentLink };
    case SET_CURRENT_LINK:
      return {
        ...state,
        currentLink: action.currentLink,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
