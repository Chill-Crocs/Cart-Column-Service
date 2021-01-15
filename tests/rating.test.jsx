/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { mount, shallow } from 'enzyme';
import Rating from '../client/components/Rating';

const rating = {
  name: 'hello',
  sales: -1,
  stars: -1,
};

const wrapper = mount(<Rating rating={rating} />);

describe('Rating render', () => {
  test('should have the correct tags', () => {
    expect(wrapper.find('span')).toExist();
    expect(wrapper.find('ul')).not.toExist();
  });
});
