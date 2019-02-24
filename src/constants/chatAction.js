import CHAT_ENTITY from "./chatEntity";

export const ACTIONS = {
  CHAT: 'CHAT_ACTION_CHAT',
  REPLY: 'CHAT_ACTION_REPLY',
  DISPLAY_MESSAGE: 'CHAT_ACTION_DISPLAY__MESSAGE',
  ERROR: 'CHAT_ACTION_ERROR',
  SIGNIN: 'CHAT_ACTION_SIGNIN',
  SIGNOUT: 'CHAT_ACTION_SIGNOUT',
}

export const signIn = username => ({
  type: ACTIONS.SIGNIN,
  data: { user: { username } }
});

export const sendMessage = message => ({
  type: ACTIONS.CHAT,
  data: {
    message
  }
});

export const botReply = content => ({
  type: ACTIONS.REPLY,
  message: {
    from: CHAT_ENTITY.BOT,
    content
  }
});
export const displaySelfMessage = content => ({
  type: ACTIONS.DISPLAY_MESSAGE,
  message: {
    from: CHAT_ENTITY.ME,
    content
  }
})

export const errorAction = error => ({
  type: ACTIONS.ERROR,
  error
})

export const signOut = () => ({
  type: ACTIONS.SIGNOUT
});