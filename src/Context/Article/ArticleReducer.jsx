import { GET_ARTICLES, POST_ARTICLES } from "../types";

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
    default:
      return state;
  }
};