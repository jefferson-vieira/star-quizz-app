import React from 'react';
import { shallow, mount } from 'enzyme';

import Logo from '../../src/components/Logo';
import logo from '../../src/assets/img/logo.png';

describe('Testing Logo Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show logo', () => {
    const wrapper = mount(<Logo />);
    expect(wrapper.find('img').prop('src')).toEqual(logo);
  });
});
