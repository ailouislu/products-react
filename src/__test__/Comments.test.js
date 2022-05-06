import React from "react"
import {render} from '@testing-library/react'
import {Router} from 'react-router-dom'
import Comments from "../components/Comments";
import Enzyme, {shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {createMemoryHistory} from 'history'

Enzyme.configure({ adapter: new Adapter() });

const props = {
  comments: [],
  post:[],
  totalCount: 1,
  isLoading: true
};

const setup = () => {
  const wrapper = shallow(
      <Comments {...props} />
  );
  return {
    props,
    wrapper,
  };
};

it("calls componentDidMount", () => {
  const componentDidMountSpy = jest.spyOn(
    Comments.prototype,
    "componentDidMount"
  );
  setup();
  expect(componentDidMountSpy).toHaveBeenCalled();
  componentDidMountSpy.mockRestore();
});

it("calls component handelBackToPosts test", () => {
  const { wrapper } = setup();
  const spyFunction = jest.spyOn(wrapper.instance(), "handelBackToPosts");
  wrapper.instance().handelBackToPosts();
  expect(spyFunction).toHaveBeenCalled();
  spyFunction.mockRestore();
});




