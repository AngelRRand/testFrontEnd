import { GET_ARTICLES, POST_ARTICLES, PUT_ARTICLE, SAVE_ARTICLE } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: payload,
      };
    case POST_ARTICLES:
      return{
        ...state
      }
    case PUT_ARTICLE:
      return {
        ...state
      }
    case SAVE_ARTICLE:
      return {
        ...state,
        infoarticle: payload
      }
    default:
      return state;
  }
};