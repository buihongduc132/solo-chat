import { ACTIONS } from "../constants/chatAction";

const initialState = {
  isLoading: false,
  signedOut: false,

  user: null,
  messages: [],

  error: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHAT:
      return Object.assign({}, state, {
        isLoading: true,
        error: null
      });
    case ACTIONS.REPLY:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        messages: [...state.messages, action.message]
      });
    case ACTIONS.DISPLAY_MESSAGE:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        messages: [...state.messages, action.message]
      });
    case ACTIONS.SIGNOUT:
      return Object.assign({}, state, {
        isLoading: false,
        signedOut: true,
      });
    case ACTIONS.SIGNIN:
      return Object.assign({}, state, {
        user: action.data.user
      });
    case ACTIONS.ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      return Object.assign({}, state);
  }
};

export default chatReducer;
