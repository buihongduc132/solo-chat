import CHAT_ENTITY from "./chatEntity";

export const ACTIONS = {
  CHAT: 'CHAT_ACTION_CHAT',
  REPLY: 'CHAT_ACTION_REPLY',
  DISPLAY_MESSAGE: 'CHAT_ACTION_DISPLAY__MESSAGE',
  ERROR: 'CHAT_ACTION_ERROR',
  SIGNIN: 'CHAT_ACTION_SIGNIN',
  SIGNOUT: 'CHAT_ACTION_SIGNOUT',
}

export const signIn = username => {};
export const sendMessage = message => {};
export const botReply = content => {};
export const displaySelfMessage = content => {};
export const errorAction = error => {};
export const signOut = () => {};