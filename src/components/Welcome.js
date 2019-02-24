import React from "react";
import _ from 'lodash';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Input from "./common/Input";
import { signIn } from "../constants/chatAction";
import Button from "./common/Button";

class WelcomeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.username = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const inputUsername = _.get(this.username, 'current.value', null);

    if (inputUsername) {
      return this.props.signIn(inputUsername);
    }
  }

  render() {
    return (
      <div className="welcome">
        <form onSubmit={this.onSubmit}>
          <Input ref={this.username} className="field__input username__input" required type="text" placeholder="Username" />
          <Button type="submit" text="Enter" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  signIn
}, dispatch);

const Welcome = connect(null, mapDispatchToProps)(WelcomeComponent);
export default Welcome;