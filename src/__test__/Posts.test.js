import React from "react"
import Posts from "../components/Posts";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  posts: [],
  currentPage: 1,
  pageSize: 20,
  searchQuery: "",
  sortColumn: { path: "title", order: "asc" },
  isLoading: true
};

const setup = () => {
  const wrapper = shallow(
      <Posts {...props} />
  );
  return {
    props,
    wrapper,
  };
};

it("calls componentDidMount", () => {
  const componentDidMountSpy = jest.spyOn(
    Posts.prototype,
    "componentDidMount"
  );
  setup();
  expect(componentDidMountSpy).toHaveBeenCalled();
  componentDidMountSpy.mockRestore();
});

it("calls component handlePageChange test", () => {
  const { wrapper } = setup();
  const spyFunction = jest.spyOn(wrapper.instance(), "handlePageChange");
  wrapper.instance().handlePageChange();
  expect(spyFunction).toHaveBeenCalled();
  spyFunction.mockRestore();
});

it("calls component handleSearch test", () => {
  const { wrapper } = setup();
  const spyFunction = jest.spyOn(wrapper.instance(), "handleSearch");
  wrapper.instance().handleSearch();
  expect(spyFunction).toHaveBeenCalled();
  spyFunction.mockRestore();
});

it("calls component handleSort test", () => {
  const { wrapper } = setup();
  const spyFunction = jest.spyOn(wrapper.instance(), "handleSort");
  wrapper.instance().handleSort();
  expect(spyFunction).toHaveBeenCalled();
  spyFunction.mockRestore();
});

it("calls component getPagedData test", () => {
  const { wrapper } = setup();
  const spyFunction = jest.spyOn(wrapper.instance(), "getPagedData");
  wrapper.instance().getPagedData();
  expect(spyFunction).toHaveBeenCalled();
  spyFunction.mockRestore();
});


