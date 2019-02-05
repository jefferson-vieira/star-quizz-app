import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import Home from '../../../src/pages/Home/Home';
import Rules from '../../../src/components/modals/Rules';

describe('Testing Home Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show rules modal', () => {
    const props = { showRules: false };
    const wrapper = mount(
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>
    );

    expect(wrapper.find(Rules).isEmptyRender()).toBe(false);

    wrapper.setProps({ showRules: false });
    expect(wrapper.find(Rules).isEmptyRender()).toBe(false);
  });

  it('should can redirect to /rank', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/home']}>
        <Home />
      </MemoryRouter>
    );

    expect(wrapper.find('Link').props().to).toBe('/rank');
  });
});
