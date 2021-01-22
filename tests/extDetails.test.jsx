/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow } from 'enzyme';
import ExtDetails from '../client/components/ExtDetails';

const extDetails = {
  sales: 400,
  availability: true,
  description: 'A description',
};

const wrapper = mount(<ExtDetails extDetails={extDetails} />);

describe('extDetails render', () => {
  test('should have correct state', () => {
    expect(wrapper).toHaveState('detailsClicked');
    expect(wrapper).toHaveState('descriptionClicked');
    expect(wrapper).toHaveState('shippingClicked');
    expect(wrapper).toHaveState('descriptionExpand');
    expect(wrapper).toHaveState('shader');
    expect(wrapper).toHaveState('expandButtonContent');
  });
});

describe('getCollapDetails', () => {
  test('should check getCollapDetails()', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getCollapDetails');
    instance.getCollapDetails();
    expect(instance.getCollapDetails).toHaveBeenCalledTimes(1);
  });
});

describe('getCollapDescrip', () => {
  test('should check getCollapDescrip()', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getCollapDescrip');
    instance.getCollapDescrip();
    expect(instance.getCollapDescrip).toHaveBeenCalledTimes(1);
  });
});

describe('getCollapShipping', () => {
  test('should check getCollapShipping', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getCollapShipping');
    instance.getCollapShipping();
    expect(instance.getCollapShipping).toHaveBeenCalledTimes(1);
    expect(instance.getCollapShipping()).toBeTruthy();
  });
});

describe('onClick', () => {
  test('should change state when details collap is clicked', () => {
    const event = {
      target: {
        className: 'detailsCollapsible',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick(event);
    expect(instance.collapseOnClick).toHaveBeenCalledTimes(1);
  });
  test('should change state when description collap is clicked', () => {
    const event = {
      target: {
        className: 'descriptionCollapsible',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick(event);
    expect(instance.collapseOnClick).toHaveBeenCalledTimes(2);
  });
  test('should change state when shipping collap is clicked', () => {
    const event = {
      target: {
        className: 'shippingCollapsible',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick(event);
    expect(instance.collapseOnClick).toHaveBeenCalledTimes(3);
  });
  test('should change state when description button is clicked', () => {
    const event = {
      target: {
        className: 'descriptionButton',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick(event);
    expect(instance.collapseOnClick).toHaveBeenCalledTimes(4);
  });
});
