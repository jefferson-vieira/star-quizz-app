import React from 'react';
import { shallow, mount } from 'enzyme';

import Home from '../src/pages/Home/Home';

describe('Testing Home Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show rules modal', () => {
    const props = { showRules: true };

    const wrapper = mount(
      <div id="root">
        <Home {...props} />
      </div>
    );

    wrapper.update();

    expect(wrapper.find('#modal-rules').exists()).toEqual(true);
  });
});
