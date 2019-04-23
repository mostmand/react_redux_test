import { ADD_ARTICLE } from "../constants/action-types";
import Article from "../model/Article";
import Action from "../model/Action";

const initialState = {
  articles: [Article]
};

function rootReducer(state = initialState, action: Action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
};
export default rootReducer;