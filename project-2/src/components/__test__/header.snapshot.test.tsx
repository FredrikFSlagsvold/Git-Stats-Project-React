import React, {useState} from 'react';
import renderer from 'react-test-renderer';
import Card from '../Card';


it('renders correctly', () => {
  const tree = renderer
    .create(<Card authorName={''} title={''} committedDate={""} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

