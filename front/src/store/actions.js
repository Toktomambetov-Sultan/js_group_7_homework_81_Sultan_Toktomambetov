import axiosOrder from "../axiosOrder";
const {
  CHANGE_CURRENT_LINK,
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCH_REQUEST,
  CLEAR_CURRENT_LINK,
  SET_CURRENT_LINK,
} = require("./actionTypes");

export const changeCurrentLink = ({ name, value }) => {
  return {
    type: CHANGE_CURRENT_LINK,
    name,
    value,
  };
};

export const clearCurrentLink = () => {
  return {
    type: CLEAR_CURRENT_LINK,
  };
};

export const setCurrentLink = (currentLink) => {
  return {
    type: SET_CURRENT_LINK,
    currentLink,
  };
};

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

const fetchError = () => {
  return {
    type: FETCH_ERROR,
  };
};

const fetchSuccess = () => {
  return {
    type: FETCH_SUCCESS,
  };
};

export const shortenLink = (link) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await axiosOrder.post("/shortUrl/byOriginalLink", { url: link });
      const data = response.data || (await axiosOrder.post("/shortUrl", { url: link })).data;
      dispatch(setCurrentLink(data));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};

export const getOriginalLink = (id) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const { data } = await axiosOrder.get("/shortUrl/" + id);
      data ? dispatch(setCurrentLink(data)) : dispatch(clearCurrentLink());
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};
