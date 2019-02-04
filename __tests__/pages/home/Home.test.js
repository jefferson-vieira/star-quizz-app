import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import Home from '../../../src/pages/Home/Home';

describe('Testing Home Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show rules modal', () => {
    const props = { showRules: true };

    const wrapper = mount(
      <div id="root">
        <MemoryRouter>
          <Home {...props} />
        </MemoryRouter>
      </div>
    );

    wrapper.update();

    expect(wrapper.find('#modal-rules').exists()).toBe(true);
  });

  it('should can redirect to /rank', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <Home />
      </MemoryRouter>
    );

    expect(wrapper.find('Link').props().to).toBe('/rank');
  });
});
