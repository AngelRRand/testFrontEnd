import { GET_ARTICLES, GET_LAST_ARTICLES } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: payload,
      };
    case GET_LAST_ARTICLES:
      return {
        ...state,
        lastArticles: payload,
      };
    default:
      return state;
  }
};