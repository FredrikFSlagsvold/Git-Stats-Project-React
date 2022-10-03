import React, {useState} from 'react';
import renderer from 'react-test-renderer';
import Card from '../Card';


it('renders correctly', () => {
  const tree = renderer
    .create(<Card authorName={''} title={''} comittedDate={""} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

