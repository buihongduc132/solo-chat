import React from "react";
import ChatArea from "./chat/ChatArea";
import InteractionBar from "./chat/InteractionBar";
import UserProfile from "./chat/UserProfile";
import { connect } from "react-redux";

import "../styles/ChatBox.css";

class ChatBoxComponent extends React.Component {
	render() {
		return <div className="chatBox">
			<UserProfile />
			<ChatArea />
			<InteractionBar />
		</div>
	}
}

const mapStateToProps = () => ({
});

const ChatBox = connect(mapStateToProps)(ChatBoxComponent);

export default ChatBox;
