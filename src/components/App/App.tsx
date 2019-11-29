import React from "react";
import UserList from "../../containers/users/UserList";
import HobbiesList from "../../containers/hobbies/HobbiesList";
import "./App.scss";

class App extends React.Component<{}> {
  render() {
    return (
      <div className="app">
        <h1 className="heading">User hobbies</h1>
        <div className="app-container">
          <UserList />
          <HobbiesList />
        </div>
      </div>
    );
  }
}

export default App;
