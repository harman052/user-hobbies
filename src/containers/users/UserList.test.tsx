import React from "react";
import { shallow } from "enzyme";
import { UserList } from "./UserList";

const props = {
  userList: [
    { userId: 1, name: "Sindy" },
    { userId: 2, name: "John" },
    { userId: 3, name: "Joe" }
  ],
  addUser: jest.fn(),
  fetchUsers: jest.fn(),
  activateHobbiesPanel: jest.fn(),
  isHobbiesPanelActive: false,
  activeUserId: 0,
  setActiveUserId: jest.fn()
};

describe("UserList", () => {
  it("should render UserList component", () => {
    const wrapper = shallow(<UserList {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render one input field", () => {
    const wrapper = shallow(<UserList {...props} />);
    expect(wrapper.find("input").length).toBe(1);
  });

  it("should render one button", () => {
    const wrapper = shallow(<UserList {...props} />);
    expect(wrapper.find("button").length).toBe(1);
  });

  it("should render users", () => {
    const wrapper = shallow(<UserList {...props} />);
    expect(wrapper.find(".user-name-instance").length).toBe(
      props.userList.length
    );
  });
});
