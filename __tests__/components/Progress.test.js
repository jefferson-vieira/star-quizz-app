import React from 'react';
import { shallow, mount } from 'enzyme';

import Progress from '../../src/components/Progress';

describe('Testing Progress Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Progress />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show progress', () => {
    const wrapper = mount(<Progress />);
    wrapper.setProps({ valuenow: 50 });
    expect(wrapper.find('.progress-bar').prop('style').width).toBe('50%');
  });
});
