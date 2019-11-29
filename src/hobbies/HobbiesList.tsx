import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faSnowboarding } from "@fortawesome/free-solid-svg-icons";
import EmptyList from "../components/EmptyList";
import messages from "../config/messages";
import { MyStore, hobbies } from "../types/index";
import { addHobby, deleteHobby, fetchHobbies } from "../store/actions/index";
import getData from "../api/apiUtils";
import "./styles.scss";

interface Props {
  isHobbiesPanelActive: boolean;
  activeUserId: number;
  addHobby: (hobbies: hobbies) => void;
  fetchHobbies: (hobbyList: hobbies[]) => void;
  hobbyList: hobbies[];
  deleteHobby: (hobbyName: string) => void;
}

interface State {
  userId: number;
  passionLevel: string;
  hobbyName: string;
  year: number;
}

const initialState = {
  userId: 0,
  passionLevel: "Low",
  hobbyName: "",
  year: new Date().getFullYear()
};

export class HobbiesList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    const { fetchHobbies } = this.props;
    getData("http://localhost:3001/HobbyList").then((response: any) => {
      fetchHobbies(response.data);
      //console.log(response.data);
    });
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

  addNewHobby = (
    userId: number,
    passionLevel: string,
    hobbyName: string,
    year: number
  ) => {
    const { addHobby } = this.props;
    if (hobbyName && year) {
      addHobby({
        userId,
        passionLevel,
        hobbyName,
        year
      });
      this.setState(initialState);
    }
  };

  render() {
    const filterHobbyList = (hobbyList: hobbies[], userId: number) => {
      return hobbyList.filter(hobby => hobby.userId === userId);
    };

    const {
      isHobbiesPanelActive,
      activeUserId: userId,
      deleteHobby,
      hobbyList
    } = this.props;
    const { passionLevel, hobbyName, year } = this.state;
    const { emptyHobbyList, noUserSelected } = messages;
    const filteredHobbyList = filterHobbyList(hobbyList, userId);
    return (
      <div className="hobbies-col">
        <div
          className={
            isHobbiesPanelActive ? "hobby-input-section" : "hide-hobbies-list"
          }
        >
          <label>Passion level</label>
          <select
            name="passionLevel"
            onChange={e => this.handlePassionLevel(e)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <label>Enter hobby</label>
          <input
            type="text"
            name="hobbyName"
            value={hobbyName}
            onChange={e => this.handleHobbyName(e)}
            placeholder="e.g. hiking"
          />

          <label>Enter year</label>
          <input
            type="number"
            name="year"
            value={year}
            placeholder="e.g. 2019"
            onChange={e => this.handleYear(e)}
          />
          <button
            type="submit"
            onClick={() =>
              this.addNewHobby(userId, passionLevel, hobbyName, year)
            }
          >
            Add Hobby <FontAwesomeIcon icon={faSnowboarding} />
          </button>
        </div>
        <div className="hobby-list">
          {filteredHobbyList && filteredHobbyList.length > 0 ? (
            filteredHobbyList.map((hobby, index) => (
              <div key={index} className="hobby-instance">
                <span>{hobby.passionLevel}</span>
                <span>{hobby.hobbyName}</span>
                <span>Since {hobby.year}</span>
                <span
                  className="delete-hobby"
                  onClick={() => deleteHobby(hobby.hobbyName)}
                >
                  Delete <FontAwesomeIcon icon={faTrashAlt} />
                </span>
              </div>
            ))
          ) : isHobbiesPanelActive ? (
            <EmptyList className="empty-hobby-list" message={emptyHobbyList} />
          ) : (
            <EmptyList className="empty-hobby-list" message={noUserSelected} />
          )}
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
  deleteHobby,
  fetchHobbies
};

export default connect(mapStateToProps, mapDispatchToProps)(HobbiesList);
