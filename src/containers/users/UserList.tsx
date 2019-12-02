import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Store, user } from "../../types";
import getData from "../../api/apiUtils";
import {
  addUser,
  fetchUsers,
  activateHobbiesPanel,
  setActiveUserId
} from "../../store/actions";
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
    const {
      isHobbiesPanelActive,
      activateHobbiesPanel,
      setActiveUserId
    } = this.props;
    if (!isHobbiesPanelActive) {
      activateHobbiesPanel(true);
    }
    setActiveUserId(userId);
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
          {userList &&
            userList.map(user => (
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
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: Store) => {
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
