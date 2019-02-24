import * as chatAction from "../constants/chatAction";
import CHAT_ENTITY from "../constants/chatEntity";

describe('chatActions', () => {
  it('should create signin action', () => {
    const username = 'TestingUsername';
    const expectedAction = {
      type: chatAction.ACTIONS.SIGNIN,
      data: { user: { username } }
    };

    expect(chatAction.signIn(username)).toEqual(expectedAction);
  });

  it('should create sendMessage action', () => {
    const message = 'TestingMessage';
    const expectedAction = {
      type: chatAction.ACTIONS.CHAT,
      data: { message }
    };

    expect(chatAction.sendMessage(message)).toEqual(expectedAction);
  });

  it('should create botReply action', () => {
    const content = 'testingMessageContent';
    const expectedAction = {
      type: chatAction.ACTIONS.REPLY,
      message: {
        from: CHAT_ENTITY.BOT,
        content
      }
    };

    expect(chatAction.botReply(content)).toEqual(expectedAction);
  });

  it('should create displaySelfMessage action', () => {
    const content = 'testingMessageContent';
    const expectedAction = {
      type: chatAction.ACTIONS.DISPLAY_MESSAGE,
      message: {
        from: CHAT_ENTITY.ME,
        content
      }
    };

    expect(chatAction.displaySelfMessage(content)).toEqual(expectedAction);
  });

  it('should create errorAction', () => {
    const error = 'TestingErrorMessage';
    const expectedAction = {
      type: chatAction.ACTIONS.ERROR,
      error
    };

    expect(chatAction.errorAction(error)).toEqual(expectedAction);
  });

  it('should create signOut action', () => {
    const expectedAction = {
      type: chatAction.ACTIONS.SIGNOUT
    };

    expect(chatAction.signOut()).toEqual(expectedAction);
  });
});