import {
  GET_FILM_REQUEST,
  GET_FILM_SUCCESS,
  GET_FILM_ERROR,
} from "../../actionTypes";

import axios from "axios";
import objectToQueryString from "../../../utils/objectToQueryString";

const URL = "http://www.omdbapi.com";
const API_KEY = "98558322";

export const getFilmsByName =
  (movieName, paramsObj = {}) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_FILM_REQUEST });

      const queryParams = objectToQueryString(paramsObj);
      const response = await axios(
        `${URL}/?s=${movieName}&apikey=${API_KEY}&${queryParams}`
      );

      dispatch({
        type: GET_FILM_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_FILM_ERROR,
        payload: error,
      });
    }
  };
