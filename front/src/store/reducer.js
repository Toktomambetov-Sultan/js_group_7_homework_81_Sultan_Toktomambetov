const { CHANGE_CURRENT_LINK, CLEAR_CURRENT_LINK, SET_CURRENT_LINK } = require("./actionTypes");

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
