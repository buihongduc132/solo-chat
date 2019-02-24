import React from "react";
import chatEntity from "../../constants/chatEntity";
import { string } from 'prop-types';
import "../../styles/App.css";

class MessageComponent extends React.Component {
	render() {
		return (

			<div className={`message chat_from_${this.props.from}`}>
				{
					this.props.from === chatEntity.BOT ?
						<p className="message-content" dangerouslySetInnerHTML={{ __html: this.props.content }}></p>
						:
						<p className="message-content">{this.props.content}</p>
				}
			</div>
		)
	}
}

MessageComponent.propTypes = {
	from: string.isRequired,
	content: string.isRequired
};

export default MessageComponent;
