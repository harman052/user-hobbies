import React from "react";
import { connect } from "react-redux";
import { MyStore } from "../types/index";
import {
  addUser,
  activateHobbiesPanel,
  setActiveUserId
} from "../store/actions/index";
import "./styles.scss";

interface Props {
  userList: string[];
  addUser: (newUser: string) => void;
  activateHobbiesPanel: (activationFlag: boolean) => void;
  isHobbiesPanelActive: boolean;
  setActiveUserId: (userId: number) => void;
}

interface State {
  text: string;
}

class UserList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  addUser = () => {
    this.props.addUser(this.state.text);
    this.setState({
      text: ""
    });
  };

  selectUser = (userId: number) => {
    console.log("userId: ", userId);
    if (!this.props.isHobbiesPanelActive) {
      this.props.activateHobbiesPanel(true);
    }
    this.props.setActiveUserId(userId);
    // this.setState({
    //   // activateHobbiesPanel: true,
    //   activeUserId: userId
    // });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target;
    this.setState({
      text: value
    });
  };

  render() {
    // const {
    //   text,
    //   userList,
    //   handleChange,
    //   addUser,
    //   selectUser
    // }: {
    //   text: string;
    //   userList: string[];
    //   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    //   addUser: () => void;
    //   selectUser: (activeUserId: number) => void;
    // } = this.props;

    const { text }: { text: string } = this.state;
    const { userList }: { userList: string[] } = this.props;

    return (
      <div className="user-col">
        <div>
          <label>
            Enter name
            <input
              type="text"
              name="user-name"
              value={text}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <button type="submit" onClick={() => this.addUser()}>
            Add
          </button>
        </div>
        <div className="user-list">
          {userList.map((user, index) => (
            <div
              className="user-name-instance"
              key={index}
              onClick={() => this.selectUser(index + 1)}
            >
              {user}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: MyStore) => {
  const { userList, isHobbiesPanelActive } = state;
  return {
    userList,
    isHobbiesPanelActive
  };
};

const mapDispatchToProps = {
  addUser,
  activateHobbiesPanel,
  setActiveUserId
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
