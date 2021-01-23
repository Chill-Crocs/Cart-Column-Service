/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow } from 'enzyme';
import Messages from '../client/components/Messages';

const messages = ['hey', 'yo'];

window.HTMLElement.prototype.scrollIntoView = function () { };

const wrapper = mount(<Messages messageBox={messages} />);

describe('Messages render', () => {
  test('should have all the messages in the options list', () => {
    expect(wrapper.find('.messagesContainer')).toExist();
  });
});
