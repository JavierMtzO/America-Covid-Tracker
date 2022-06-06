import React from 'react';
import Intro from '../Home';

const renderer = require('react-test-renderer');

test('Home renders correctly', () => {
    const tree = renderer.create(<Intro />).toJSON();
    expect(tree).toMatchSnapshot();
});