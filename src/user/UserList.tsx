import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import EmptyList from "../components/EmptyList";
import messages from "../config/messages";
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
  activeUserId: number;
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
    const { addUser } = this.props;
    const { text } = this.state;
    if (text) {
      addUser(this.state.text);
      this.setState({
        text: ""
      });
    }
  };

  selectUser = (userId: number) => {
    console.log("userId: ", userId);
    if (!this.props.isHobbiesPanelActive) {
      this.props.activateHobbiesPanel(true);
    }
    this.props.setActiveUserId(userId);
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target;
    this.setState({
      text: value
    });
  };

  render() {
    const { text }: { text: string } = this.state;
    const {
      userList,
      activeUserId
    }: { userList: string[]; activeUserId: number } = this.props;
    const { emptyUserList } = messages;
    return (
      <div className="user-col">
        <div className="user-input-section">
          <label>Enter user name</label>
          <input
            type="text"
            name="user-name"
            value={text}
            onChange={e => this.handleChange(e)}
            placeholder="e.g. Bobby"
          />
          <button type="submit" onClick={() => this.addUser()}>
            Add User <FontAwesomeIcon icon={faUserPlus} />
          </button>
        </div>
        <div className="user-list">
          {userList.length > 0 ? (
            userList.map((user, index) => (
              <div
                className={
                  activeUserId === index + 1
                    ? "user-name-instance active-user"
                    : "user-name-instance"
                }
                key={index}
                onClick={() => this.selectUser(index + 1)}
              >
                {user}
              </div>
            ))
          ) : (
            <EmptyList className="empty-user-list" message={emptyUserList} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: MyStore) => {
  const { userList, isHobbiesPanelActive, activeUserId } = state;
  return {
    userList,
    isHobbiesPanelActive,
    activeUserId
  };
};

const mapDispatchToProps = {
  addUser,
  activateHobbiesPanel,
  setActiveUserId
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
