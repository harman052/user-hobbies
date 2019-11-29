import React from "react";
import { shallow } from "enzyme";
import { HobbiesList } from "./HobbiesList";

const props = {
  isHobbiesPanelActive: true,
  activeUserId: 1,
  addHobby: jest.fn(),
  hobbyList: [
    { userId: 1, passionLevel: "Medium", hobbyName: "hiking", year: 2019 }
  ],
  deleteHobby: jest.fn()
};

describe("UserList", () => {
  it("should render HobbiesList component", () => {
    const wrapper = shallow(<HobbiesList {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render two input fields", () => {
    const wrapper = shallow(<HobbiesList {...props} />);
    expect(wrapper.find("input").length).toBe(2);
  });

  it("should render one button", () => {
    const wrapper = shallow(<HobbiesList {...props} />);
    expect(wrapper.find("button").length).toBe(1);
  });

  it("should render one select field", () => {
    const wrapper = shallow(<HobbiesList {...props} />);
    expect(wrapper.find("select").length).toBe(1);
  });

  it("should render one hobby row", () => {
    const wrapper = shallow(<HobbiesList {...props} />);
    expect(wrapper.find(".hobby-instance").length).toBe(props.hobbyList.length);
  });

  it("should render four spans in one hobby row", () => {
    const wrapper = shallow(<HobbiesList {...props} />);
    expect(wrapper.find(".hobby-instance span").length).toBe(4);
  });
});
