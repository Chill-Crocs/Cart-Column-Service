/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow } from 'enzyme';
import ShippingPolicies from '../client/components/ShippingPolicies';

const shopPolicy = {
  lastUpdated: '2013-02-08',
  returns: false,
  noReturnTypes: ['broken', 'chicken'],
};

const wrapper = mount(
  <ShippingPolicies shopPolicy={shopPolicy} />,
);

describe('Map Return Types', () => {
  test('should correctly map return types', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getReturnTypes');
    instance.getReturnTypes();
    expect(instance.getReturnTypes).toHaveBeenCalledTimes(1);
  });
});
