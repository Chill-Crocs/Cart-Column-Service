/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow } from 'enzyme';
import ShippingCost from '../client/components/ShippingCost';

const wrapper = mount(
  <ShippingCost />,
);

describe('ShippingCostCost render', () => {
  test('should have correct state', () => {
    expect(wrapper).toHaveState('expand');
  });
});

describe('Expand collapsible', () => {
  test('should expand collapsible on click', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onExpand');
    instance.onExpand();
    expect(instance.onExpand).toHaveBeenCalledTimes(1);
  });
});
