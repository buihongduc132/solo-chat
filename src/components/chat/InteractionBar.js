import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { sendMessage, botReply, displaySelfMessage, errorAction, signOut } from "../../constants/chatAction";
import _ from 'lodash';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import chatCommand from "../../constants/chatCommand";
import customConfig from "../../config/custom";
import chatError from "../../constants/errors/chatError";
import moment from "moment";

const WORD_SEPARATOR = ' ';
const COMMAND_INIT = '/';

class InteractionBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.messageContent = React.createRef();
  }

  _characterDetail(character) {
    return `
    <div><label>Name: </label><span>${character.name}</span></div>
    <div><label>Gender: </label><span>${character.gender}</span></div>
    <div><label>Birth: </label><span>${character.birth_year}</span></div>
    <div><label>Height: </label><span>${character.height}</span></div>
    `;
  }

  _refreshInput() {
    this.messageContent.current.value = '';
  }

  componentDidMount() {
    this.messageContent.current.focus();
  }

  handleTextSend = (e) => {
    e.preventDefault();
    const message = _.get(this.messageContent, 'current.value', '');
    this._refreshInput();
    this.props.sendMessage(message);
    const messageValue = message.trim();

    if (messageValue === '')
      return this.props.errorAction(chatError.EMPTY_MESSAGE);

    const words = messageValue.split(WORD_SEPARATOR);

    if (words[0][0] === COMMAND_INIT) {
      const command = words[0].substr(1);

      if (command === '')
        return this.props.errorAction(chatError.STARWARS.INVALID_INPUT);

      switch (command) {
        case chatCommand.TIME:
          return this.props.botReply(moment().format(customConfig.DATE_FORMAT));
        case chatCommand.GOODBYE:
          return this.props.signOut();
        case chatCommand.STARWARS:
          {
            const query = words.splice(1).join(WORD_SEPARATOR);
            if (query === '')
              return this.props.errorAction(chatError.STARWARS.INVALID_INPUT);

            return axios.get(customConfig.RESOLVERS.STARWARS_URL.replace('{{query}}', query))
              .then(
                response => {
                  const firstChar = _.get(response, 'data.results[0]');

                  if (firstChar) {
                    this.props.botReply(this._characterDetail(firstChar));
                  }
                  else {
                    this.props.botReply(chatError.STARWARS.CHARACTER_NOT_FOUND.replace('{{name}}', query));
                  };
                },
                error => this.props.errorAction(error)
              );
          }
        default:
          return this.props.errorAction(chatError.COMMAND_NOT_SUPPORTED.replace('{{command}}', command));
      }
    }

    return this.props.displaySelfMessage(message);
  }

  render() {
    return (
      <div className="interactionBar">
        {this.props.error && <p className="error-section">{this.props.error}</p>}

        <form onSubmit={this.handleTextSend}>
          <Input ref={this.messageContent} placeholder="Type a message" className="chatInteractiveContent" type="text" />
          <Button text={this.props.isLoading ? '...' : 'Send'} disabled={this.props.signedOut || this.props.isLoading} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ chat }) => (_.pick(chat, [
  'isLoading', 'signedOut', 'error'
]));

const mapDispatchToProps = dispatch => bindActionCreators({
  sendMessage,
  botReply,
  displaySelfMessage,
  errorAction,
  signOut
}, dispatch);

const InteractionBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(InteractionBarComponent);

export default InteractionBar;
