import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage'; 
import { start } from 'repl';

let startLogin, wrapper;

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
})
test('Should correctly render login page', () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should call startLogin on button click", () => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenLastCalledWith();
});