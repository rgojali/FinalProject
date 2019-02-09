import React, { Component } from "react";
import { ProfilePage } from "./pages/profile/ProfilePage";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfilePage />
      </div>
    );
  }
}

export default App;
