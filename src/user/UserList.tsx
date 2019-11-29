import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import EmptyList from "../components/EmptyList";
import messages from "../config/messages";
import { MyStore, user } from "../types/index";
import getData from "../api/apiUtils";
import {
  addUser,
  fetchUsers,
  activateHobbiesPanel,
  setActiveUserId
} from "../store/actions/index";
import "./styles.scss";

interface Props {
  userList: user[];
  addUser: (newUser: user) => void;
  fetchUsers: (userList: user[]) => void;
  activateHobbiesPanel: (activationFlag: boolean) => void;
  isHobbiesPanelActive: boolean;
  activeUserId: number;
  setActiveUserId: (userId: number) => void;
}

interface State {
  text: string;
}

export class UserList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    getData("http://localhost:3001/UserList").then((response: any) =>
      fetchUsers(response.data)
    );
  }

  addUser = () => {
    const { addUser, userList } = this.props;
    const { text } = this.state;
    if (text) {
      const newUser = {
        userId: userList.length + 1,
        name: text
      };
      addUser(newUser);
      this.setState({
        text: ""
      });
    }
  };

  selectUser = (userId: number) => {
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
    const { text } = this.state;
    const { userList, activeUserId } = this.props;
    console.log(userList);
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
                  activeUserId === user.userId
                    ? "user-name-instance active-user"
                    : "user-name-instance"
                }
                key={user.userId}
                onClick={() => this.selectUser(user.userId)}
              >
                {user.name}
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
  setActiveUserId,
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
