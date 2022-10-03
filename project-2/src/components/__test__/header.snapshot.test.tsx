import React, {useState} from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';
import LoginPage from '../LoginPage';


it('renders correctly', () => {
  const tree = renderer
    .create(<LoginPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

