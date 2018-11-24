import {connect} from 'react-redux';
import MessageInputComponent from '../../components/message/MessageInput';
import {actionMessages} from '../../redux/actions/actions';

const mapDispatchToProps = dispatch => ({
  addMessage: (chatId, message) => {
    message = {...message};
    dispatch(actionMessages.addMessage({chatId, message}));
  }
});

export const MessageInput = connect(
  reduxStore => {
    return {
      chatId: reduxStore.state.selectedChat,
      username: reduxStore.state.username || '',
      chatApproved: reduxStore.chats[reduxStore.state.selectedChat].approved
    };
  },
  mapDispatchToProps
)(MessageInputComponent);
