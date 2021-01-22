/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow } from 'enzyme';
import Shipping from '../client/components/Shipping';

const shipping = {
  origin: {
    latitude: '47.839958190918',
    longitude: '-122.206146240234',
  },
  exchanges: false,
};
const distance = 200;
const shopPolicy = {
  lastUpdated: '2013-02-08',
  returns: false,
  noReturnTypes: ['broken', 'chicken'],
};
const name = 'AJS';

const wrapper = mount(
  <Shipping
    shipping={shipping}
    distance={distance}
    shopPolicy={shopPolicy}
    name={name}
  />,
);

describe('Shipping render', () => {
  test('should have correct state', () => {
    expect(wrapper).toHaveState('modalClass');
    expect(wrapper).toHaveState('toolTip0');
    expect(wrapper).toHaveState('toolTip1');
    expect(wrapper).toHaveState('toolTip2');
    expect(wrapper).toHaveState('toolTip3');
  });
});

describe('Show Modal', () => {
  test('should show modal on click', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'showModal');
    instance.showModal();
    expect(instance.showModal).toHaveBeenCalledTimes(1);
  });
});

describe('Tooltip hovering', () => {
  test('should change state on tooltip hoverover', () => {
    const event = {
      target: {
        className: 'dotted-shipping arrival',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'toolTipHoverOver');
    instance.toolTipHoverOver(event);
    expect(instance.toolTipHoverOver).toHaveBeenCalledTimes(1);
  });
  test('should change state on tooltip hoverover', () => {
    const event = {
      target: {
        className: 'grid-3',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'toolTipHoverOver');
    instance.toolTipHoverOver(event);
    expect(instance.toolTipHoverOver).toHaveBeenCalledTimes(2);
  });
  test('should change state on tooltip hoverover', () => {
    const event = {
      target: {
        className: 'grid-1',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'toolTipHoverOver');
    instance.toolTipHoverOver(event);
    expect(instance.toolTipHoverOver).toHaveBeenCalledTimes(3);
  });
  test('should change state on tooltip hoverover', () => {
    const event = {
      target: {
        className: 'grid-2',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'toolTipHoverOver');
    instance.toolTipHoverOver(event);
    expect(instance.toolTipHoverOver).toHaveBeenCalledTimes(4);
  });
  test('should change state on tooltip hoverout', () => {
    const event = {
      target: {
        className: 'dotted-shipping arrival',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'toolTipHoverOut');
    instance.toolTipHoverOut(event);
    expect(instance.toolTipHoverOut).toHaveBeenCalledTimes(1);
  });
  test('should change state on tooltip hoverout', () => {
    const event = {
      target: {
        className: 'grid-3',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'toolTipHoverOut');
    instance.toolTipHoverOut(event);
    expect(instance.toolTipHoverOut).toHaveBeenCalledTimes(2);
  });
  test('should change state on tooltip hoverout', () => {
    const event = {
      target: {
        className: 'grid-1',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'toolTipHoverOut');
    instance.toolTipHoverOut(event);
    expect(instance.toolTipHoverOut).toHaveBeenCalledTimes(3);
  });
  test('should change state on tooltip hoverout', () => {
    const event = {
      target: {
        className: 'grid-2',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'toolTipHoverOut');
    instance.toolTipHoverOut(event);
    expect(instance.toolTipHoverOut).toHaveBeenCalledTimes(4);
  });
});
