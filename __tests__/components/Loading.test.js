import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../../src/components/Loading/Loading';

describe('Testing Loading Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show/not show loading', () => {
    const wrapper = shallow(<Loading />);

    wrapper.setProps({ show: true });
    expect(wrapper.getElement()).not.toBe(null);

    wrapper.setProps({ show: false });
    expect(wrapper.getElement()).toBe(null);
  });
});
