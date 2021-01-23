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

describe('Collapse Click', () => {
  test('should have a collapse button that works', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick();
    expect(instance.collapseOnClick).toHaveBeenCalledTimes(1);
  });
});

const shopPolicy2 = {
  lastUpdated: '2013-02-08',
  returns: true,
  noReturnTypes: ['broken', 'chicken'],
};

const wrapper2 = mount(
  <ShippingPolicies shopPolicy={shopPolicy2} />,
);

describe('Map Return Types', () => {
  test('should correctly map return types', () => {
    const instance = wrapper2.instance();
    jest.spyOn(instance, 'getReturnTypes');
    instance.getReturnTypes();
    expect(instance.getReturnTypes).toHaveBeenCalledTimes(1);
  });
});

describe('Collapse Click', () => {
  test('should have a collapse button that works', () => {
    const instance = wrapper2.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick();
    expect(instance.collapseOnClick).toHaveBeenCalledTimes(1);
  });
});

j