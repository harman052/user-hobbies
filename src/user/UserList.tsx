import React from "react";
import "./styles.scss";

interface Props {
  text: string;
  userList: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  selectUser: (activeUserId: number) => void;
}

class UserList extends React.Component<Props> {
  render() {
    const {
      text,
      userList,
      handleChange,
      addUser,
      selectUser
    }: {
      text: string;
      userList: string[];
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      addUser: () => void;
      selectUser: (activeUserId: number) => void;
    } = this.props;
    return (
      <div className="user-col">
        <div>
          <label>
            Enter name
            <input
              type="text"
              name="user-name"
              value={text}
              onChange={e => handleChange(e)}
            />
          </label>
          <button type="submit" onClick={() => addUser()}>
            Add
          </button>
        </div>
        <div className="user-list">
          {userList.map((user, index) => (
            <div
              className="user-name-instance"
              key={index}
              onClick={() => selectUser(index + 1)}
            >
              {user}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserList;
