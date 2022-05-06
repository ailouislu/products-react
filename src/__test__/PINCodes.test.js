import React from "react"
import { render, fireEvent } from '@testing-library/react';
import PINCodes from '../components/PINCodes';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  handleClick: jest.fn(),
  handleNumberCountsChange: jest.fn(),
  handleNumberLengthChange: jest.fn(),
  checkTwoConsecutiveNumbersNotBeSame: jest.fn(),
};

const setup = () => {
  const wrapper = shallow(
      <PINCodes {...props} />
  );
  const utils = render(<PINCodes />)
  const numberLengthInput = utils.getByLabelText('numberLength')
  const numberCountsInput = utils.getByLabelText('numberCounts')
  return {
    props,
    wrapper,
    numberLengthInput,
    numberCountsInput,
    ...utils,
  };
};

it("should return correct quantity for the getRandomNumbers", () => {
  const { wrapper } = setup();
  // The length of each number is 5, for example: '1)4132, '
  expect(wrapper.instance().getRandomNumbers(3, 10)).toHaveLength(50);
  expect(wrapper.instance().getRandomNumbers(3, 100)).toHaveLength(500);
  expect(wrapper.instance().getRandomNumbers(4, 500)).toHaveLength(2500);
  expect(wrapper.instance().getRandomNumbers(10, 50)).toHaveLength(250);
});

it("should return correct length for the getRandomNumbers", () => {
  const { wrapper } = setup();
  let number = wrapper.instance().getRandomNumbers(3, 1);
  expect(number[3].toString().length).toBe(3);
  number = wrapper.instance().getRandomNumbers(4, 2);
  expect(number[3].toString().length).toBe(4);
  number = wrapper.instance().getRandomNumbers(8, 2);
  expect(number[3].toString().length).toBe(8);
  number = wrapper.instance().getRandomNumbers(10, 1);
  expect(number[3].toString().length).toBe(10);
});

it("should return correct result for the checkTwoConsecutiveNumbersNotBeSame", () => {
  const { wrapper } = setup();
  expect(wrapper.instance().checkTwoConsecutiveNumbersNotBeSame(111)).toBeFalsy();
  expect(wrapper.instance().checkTwoConsecutiveNumbersNotBeSame(1234)).toBeTruthy();
  expect(wrapper.instance().checkTwoConsecutiveNumbersNotBeSame(221333)).toBeFalsy();
  expect(wrapper.instance().checkTwoConsecutiveNumbersNotBeSame(1111111)).toBeFalsy();
  expect(wrapper.instance().checkTwoConsecutiveNumbersNotBeSame(12345678)).toBeTruthy();
});

it("should return correct result for the checkThreeConsecutiveNumbersNotBeIncremental", () => {
  const { wrapper } = setup();
  expect(wrapper.instance().checkThreeConsecutiveNumbersNotBeIncremental(111)).toBeTruthy();
  expect(wrapper.instance().checkThreeConsecutiveNumbersNotBeIncremental(1234)).toBeFalsy();
  expect(wrapper.instance().checkThreeConsecutiveNumbersNotBeIncremental(221333)).toBeTruthy();
  expect(wrapper.instance().checkThreeConsecutiveNumbersNotBeIncremental(1111111)).toBeTruthy();
  expect(wrapper.instance().checkThreeConsecutiveNumbersNotBeIncremental(12345678)).toBeFalsy();
});

it("calls component handleClick test", () => {
  const { wrapper } = setup();
  const spyFunction = jest.spyOn(wrapper.instance(), "handleClick");
  wrapper.instance().handleClick();
  expect(spyFunction).toHaveBeenCalled();
  spyFunction.mockRestore();
});

it("should return correct value for the numberLengthInput", () => {
  const {numberLengthInput} = setup()
  fireEvent.change(numberLengthInput, {target: {value: '-1'}})
  expect(numberLengthInput.value).toBe('3')
  fireEvent.change(numberLengthInput, {target: {value: '1'}})
  expect(numberLengthInput.value).toBe('3')
  fireEvent.change(numberLengthInput, {target: {value: '5'}})
  expect(numberLengthInput.value).toBe('5')
  fireEvent.change(numberLengthInput, {target: {value: '11'}})
  expect(numberLengthInput.value).toBe('10')
  fireEvent.change(numberLengthInput, {target: {value: 's'}})
  expect(numberLengthInput.value).toBe('4')
});

it("should return correct value for the numberCountsInput", () => {
  const {numberCountsInput} = setup()
  fireEvent.change(numberCountsInput, {target: {value: '1'}})
  expect(numberCountsInput.value).toBe('1')
  fireEvent.change(numberCountsInput, {target: {value: '-1'}})
  expect(numberCountsInput.value).toBe('1')
  fireEvent.change(numberCountsInput, {target: {value: '10'}})
  expect(numberCountsInput.value).toBe('10')
  fireEvent.change(numberCountsInput, {target: {value: '100'}})
  expect(numberCountsInput.value).toBe('100')
  fireEvent.change(numberCountsInput, {target: {value: '500'}})
  expect(numberCountsInput.value).toBe('500')
  fireEvent.change(numberCountsInput, {target: {value: '600'}})
  expect(numberCountsInput.value).toBe('500')
  fireEvent.change(numberCountsInput, {target: {value: '1200'}})
  expect(numberCountsInput.value).toBe('500')
});




