import React from "react"
import Products from "../components/Products";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  products: [],
  types: "",
  exchange: "NZD",
  currentPage: 1,
  pageSize: 5,
  searchQuery: "",
  selectedType: null,
  sortColumn: { path: "title", order: "asc" }
};

const setup = () => {
  const wrapper = shallow(
      <Products {...props} />
  );
  return {
    props,
    wrapper,
  };
};


it("calls componentDidMount", () => {
  const componentDidMountSpy = jest.spyOn(
    Products.prototype,
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

it("calls component handleTypeSelect test", () => {
  const { wrapper } = setup();
  const spyFunction = jest.spyOn(wrapper.instance(), "handleTypeSelect");
  wrapper.instance().handleTypeSelect();
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


