/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/components/App';
import Rating from '../client/components/Rating';

const wrapper = mount(<App />);

describe('App render', () => {
  test('should have correct state', () => {
    expect(wrapper).toHaveState('rating');
    expect(wrapper).toHaveState('info');
    expect(wrapper).toHaveState('selectors');
  });
});

describe('Render props', () => {
  test('should have required props', () => {
    expect(wrapper.find(Rating)).toHaveProp('rating');
  });
});
