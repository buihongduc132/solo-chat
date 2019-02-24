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
    default:
      return Object.assign({}, state);
  }
};

export default chatReducer;
