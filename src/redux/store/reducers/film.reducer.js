import {
  GET_FILM_REQUEST,
  GET_FILM_SUCCESS,
  GET_FILM_ERROR,
} from "../../actionTypes";

const initialState = {
  isLoading: false,
  film: [],
  message: null,
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FILM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        film: action.payload,
        message: action.payload.Error,
      };
    case GET_FILM_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.payload.Error,
      };
    default:
      return state;
  }
};

export default filmReducer;
