import React from "react";
import { connect } from "react-redux";
import Message from "./Message";

class ChatAreaComponent extends React.Component {
	render() {
		const { messages } = this.props;
		return (<div className="chatArea">
			{
				messages.map((message, index) => (
					<Message key={index} {...message}></Message>
				))
			}
		</div>);
	}
}

const mapStateToProps = ({ chat: { messages } }) => ({
	messages
});

const ChatArea = connect(mapStateToProps)(ChatAreaComponent);

export default ChatArea;
