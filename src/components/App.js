import React from "react";
import ChatBox from "./ChatBox";
import { connect } from "react-redux";
import Welcome from "./Welcome";

import "../styles/App.css";

const AppComponent = ({ user }) => (
  <div className="app">
    {
      user ? <ChatBox></ChatBox>
        : <Welcome></Welcome>
    }
  </div>
);

const mapStateToProps = ({ chat }) => ({
  user: chat.user,
});

const App = connect(mapStateToProps)(AppComponent);

export default App;
