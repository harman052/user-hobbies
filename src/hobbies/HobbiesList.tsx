import React from "react";
import { connect } from "react-redux";
import { MyStore, hobbies } from "../types/index";
import { addHobby, deleteHobby } from "../store/actions/index";
import "./styles.scss";

interface Props {
  isHobbiesPanelActive: boolean;
  activeUserId: number;
  // addHobby: (
  //   userId: number,
  //   passionLevel: string,
  //   hobbyName: string,
  //   year: number
  // ) => void;
  addHobby: (hobbies: hobbies) => void;
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

  deleteHobby = (hobbyName: string) => {
    // const userConfirmation = window.confirm(
    //   "Are you sure you want to delete hobby?"
    // );
    // if (!userConfirmation) {
    //   return;
    // }
    // let hobbies = this.state.hobbies;
    // const index = hobbies.findIndex(hobby => hobby.hobbyName === hobbyName);
    // if (index > -1) {
    //   hobbies.splice(index, 1);
    //   this.setState({ hobbies });
    // }
  };

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
    const {
      isHobbiesPanelActive,
      activeUserId: userId,
      addHobby,
      deleteHobby,
      hobbyList
    } = this.props;
    const { passionLevel, hobbyName, year } = this.state;
    return (
      <div className="hobbies-col">
        <div
          className={
            isHobbiesPanelActive ? "show-hobbies-list" : "hide-hobbies-list"
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
              addHobby({
                userId,
                passionLevel,
                hobbyName,
                year
              })
            }
          >
            Add
          </button>
          {hobbyList &&
            hobbyList
              .filter(hobby => hobby.userId === userId)
              .map((hobby, index) => (
                <div key={index}>
                  {hobby.userId} {hobby.hobbyName} {hobby.passionLevel}{" "}
                  {hobby.year} {""}
                  <span
                    className="delete-hobby"
                    onClick={() => deleteHobby(hobby.hobbyName)}
                  >
                    Delete
                  </span>
                </div>
              ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: MyStore) => {
  const { isHobbiesPanelActive, activeUserId, hobbyList } = state;
  return {
    isHobbiesPanelActive,
    activeUserId,
    hobbyList
  };
};

const mapDispatchToProps = {
  addHobby,
  deleteHobby
};

export default connect(mapStateToProps, mapDispatchToProps)(HobbiesList);
