import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import HomeButton from '../../src/components/HomeButton';

describe('Testing HomeButton Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<HomeButton />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should redirect to /home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <HomeButton />
      </MemoryRouter>
    );

    expect(wrapper.find('Link').props().to).toBe('/home');
  });
});
