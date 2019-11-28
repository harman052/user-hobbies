import React from "react";
import UserList from "./user/UserList";
import HobbiesList from "./hobbies/HobbiesList";
import "./App.scss";

interface Props {}

interface hobbies {
  userId: number;
  passionLevel: string;
  hobbyName: string;
  year: number;
}
interface State {
  text: string;
  userList: string[];
  activateHobbiesPanel: boolean;
  activeUserId: number;
  hobbies: hobbies[];
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: "",
      userList: [],
      activeUserId: 0,
      activateHobbiesPanel: false,
      hobbies: []
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target;
    this.setState({
      text: value
    });
  };

  addUser = () => {
    this.setState(prevState => ({
      text: "",
      userList: [...prevState.userList, prevState.text]
    }));
  };

  selectUser = (userId: number) => {
    this.setState({
      activateHobbiesPanel: true,
      activeUserId: userId
    });
  };

  addHobby = (
    userId: number,
    passionLevel: string,
    hobbyName: string,
    year: number
  ) => {
    this.setState(
      prevState => ({
        hobbies: [
          ...prevState.hobbies,
          { userId, passionLevel, hobbyName, year }
        ]
      }),
      () => console.log(this.state)
    );
  };

  deleteHobby = (hobbyName: string) => {
    let hobbies = this.state.hobbies;
    const index = hobbies.findIndex(hobby => hobby.hobbyName === hobbyName);
    if (index > -1) {
      hobbies.splice(index, 1);
      this.setState({ hobbies });
    }
  };

  render() {
    const {
      text,
      userList,
      activeUserId,
      activateHobbiesPanel,
      hobbies
    }: {
      text: string;
      userList: string[];
      activeUserId: number;
      activateHobbiesPanel: boolean;
      hobbies: hobbies[];
    } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <UserList
            text={text}
            userList={userList}
            handleChange={this.handleChange}
            addUser={this.addUser}
            selectUser={this.selectUser}
          />
          <HobbiesList
            activate={activateHobbiesPanel}
            addHobby={this.addHobby}
            deleteHobby={this.deleteHobby}
            activeUserId={activeUserId}
            hobbyList={hobbies}
          />
        </div>
      </div>
    );
  }
}

export default App;
