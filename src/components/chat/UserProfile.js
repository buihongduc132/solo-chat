import React from "react";
import { connect } from "react-redux";

class UserProfileComponent extends React.Component {
	render() {
		return (<div className="userProfile">
			{this.props.user.username}
		</div>);
	}
}

const mapStateToProps = ({ chat }) => ({
	user: chat.user
});

const UserProfile = connect(mapStateToProps)(UserProfileComponent);

export default UserProfile;
