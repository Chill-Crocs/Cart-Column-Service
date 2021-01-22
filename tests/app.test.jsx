/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/components/App';
import Rating from '../client/components/Rating';
import Info from '../client/components/Info';
import Selector from '../client/components/Selector';
import ExtDetails from '../client/components/ExtDetails';

const wrapper = mount(<App />);

describe('App render', () => {
  test('should have correct state', () => {
    expect(wrapper).toHaveState('rating');
    expect(wrapper).toHaveState('info');
    expect(wrapper).toHaveState('selectors');
    expect(wrapper).toHaveState('shipping');
    expect(wrapper).toHaveState('shopPolicy');
    expect(wrapper).toHaveState('seller');
    expect(wrapper).toHaveState('userZip');
    expect(wrapper).toHaveState('distance');
  });
});

describe('Render props', () => {
  test('should have required props', () => {
    expect(wrapper.find(Rating)).toHaveProp('rating');
    expect(wrapper.find(Info)).toHaveProp('info');
    expect(wrapper.find(Selector)).toHaveProp('selectors');
    expect(wrapper.find(ExtDetails)).toHaveProp('extDetails');
  });
});

describe('ComponenDidMount', () => {
  test('should check `componentDidMount()`', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getData');
    instance.componentDidMount();
    expect(instance.getData).toHaveBeenCalledTimes(1);
  });
});
