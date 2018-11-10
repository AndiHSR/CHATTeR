import {actionTypes as types} from './actions';

export default {
  toggleMenu() {
    return {
      type: types.TOGGLE_MENU
    };
  },
  selectChat(chatId) {
    return {
      type: types.SELECT_CHAT,
      chatId
    };
  },

  setUsername(username) {
    return {
      type: types.SET_USERNAME,
      username
    };
  },

  setSocketStateOpen() {
    return {
      type: types.SOCKET_OPEN
    };
  },

  setSocketStateClosed() {
    return {
      type: types.SOCKET_CLOSED
    };
  }
};
