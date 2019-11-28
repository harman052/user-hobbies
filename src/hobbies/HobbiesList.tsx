import React from "react";
import "./styles.scss";

interface hobbies {
  userId: number;
  passionLevel: string;
  hobbyName: string;
  year: number;
}

interface Props {
  activate: boolean;
  activeUserId: number;
  addHobby: (
    userId: number,
    passionLevel: string,
    hobbyName: string,
    year: number
  ) => void;
  hobbyList: hobbies[];
  deleteHobby: (hobbyName: string) => void;
}

interface State {
  userId: number;
  passionLevel: string;
  hobbyName: string;
  year: number;
}

class HobbiesList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userId: 0,
      passionLevel: "",
      hobbyName: "",
      year: 0
    };
  }

  handleHobbyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ hobbyName: e.target.value });
  };

  handlePassionLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ passionLevel: e.target.value });
  };

  handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ year: parseInt(e.target.value) });
  };

  render() {
    return (
      <div className="hobbies-col">
        <div
          className={
            this.props.activate ? "show-hobbies-list" : "hide-hobbies-list"
          }
        >
          <label>
            Passion level
            <select
              name="passionLevel"
              onChange={e => this.handlePassionLevel(e)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </label>{" "}
          <label>
            Enter hobby
            <input
              type="text"
              name="hobbyName"
              onChange={e => this.handleHobbyName(e)}
            />
          </label>{" "}
          <label>
            Enter year
            <input type="text" name="year" onChange={e => this.handleYear(e)} />
          </label>{" "}
          <button
            type="submit"
            onClick={() =>
              this.props.addHobby(
                this.props.activeUserId,
                this.state.passionLevel,
                this.state.hobbyName,
                this.state.year
              )
            }
          >
            Add
          </button>
          {this.props.hobbyList
            .filter(hobby => hobby.userId === this.props.activeUserId)
            .map((hobby, index) => (
              <div key={index}>
                {hobby.userId} {hobby.hobbyName} {hobby.passionLevel}{" "}
                {hobby.year} {""}
                <span onClick={() => this.props.deleteHobby(hobby.hobbyName)}>
                  Delete
                </span>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default HobbiesList;
