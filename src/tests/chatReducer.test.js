import chatReducer from '../reducers/chatReducer';
import * as chatAction from "../constants/chatAction";
import CHAT_ENTITY from '../constants/chatEntity';

const initialState = {
  isLoading: false,
  signedOut: false,

  user: null,
  messages: [],

  error: null,
};

describe('chatReducer', () => {
  it('should return initial state', () => {
    const expectedState = { ...initialState };
    expect(chatReducer(undefined, {})).toEqual(expectedState);
  });

  it('should process signin action properly', () => {
    const username = 'TestingUsername';
    const currState = initialState;
    const expectedState = {
      ...currState,
      user: { username }
    };

    expect(chatReducer(currState, chatAction.signIn(username))).toEqual(expectedState);
  });

  it('should process signout action properly', () => {
    const currState = { ...initialState };
    const expectedState = {
      ...currState,
      signedOut: true
    };

    expect(chatReducer(currState, chatAction.signOut())).toEqual(expectedState);
  });

  it('should process error action properly', () => {
    const error = 'ThisIsErrorMessage';
    const currState = { ...initialState, isLoading: true };
    const expectedState = {
      ...currState,
      error,
      isLoading: false
    };

    expect(chatReducer(currState, chatAction.errorAction(error))).toEqual(expectedState);
  });

  it('should process displayMessage action properly', () => {
    const content = 'ThisIsMessage';
    const currState = { ...initialState, isLoading: true };
    const expectedState = {
      ...currState,
      messages: [
        { from: CHAT_ENTITY.ME, content }
      ],
      isLoading: false
    };

    expect(chatReducer(currState, chatAction.displaySelfMessage(content))).toEqual(expectedState);
  });

  it('should process chat action properly', () => {
    const content = 'ThisIsMessage';
    const currState = { ...initialState };
    const expectedState = {
      ...currState,
      isLoading: true,
      error: null
    };

    expect(chatReducer(currState, chatAction.sendMessage(content))).toEqual(expectedState);
  });

  it('should process botReply action properly', () => {
    const content = 'ThisIsMessage';
    const currState = { ...initialState, isLoading: true };
    const expectedState = {
      ...currState,
      messages: [
        { from: CHAT_ENTITY.BOT, content }
      ],
      isLoading: false
    };

    expect(chatReducer(currState, chatAction.botReply(content))).toEqual(expectedState);
  });

  it('should store messages in corect order', () => {
    const firstMessage = {
      from: CHAT_ENTITY.BOT,
      content: 'Hello'
    }
    const content = 'NewMessageContent';
    const currState = { ...initialState, messages: [firstMessage] };
    const expectedState = {
      ...currState,
      messages: [
        firstMessage,
        { from: CHAT_ENTITY.BOT, content }
      ],
      isLoading: false
    };

    expect(chatReducer(currState, chatAction.botReply(content))).toEqual(expectedState);
  });
});