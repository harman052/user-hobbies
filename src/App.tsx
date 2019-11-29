import React from "react";
import UserList from "./user/UserList";
import HobbiesList from "./hobbies/HobbiesList";
import "./App.scss";

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <UserList />
          <HobbiesList />
        </div>
      </div>
    );
  }
}

export default App;
