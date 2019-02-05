import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import Rank from '../../../src/pages/Rank/Rank';
import RankList from '../../../src/pages/Rank/RankList';

describe('Testing Rank Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Rank />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should has a RankList', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Rank />
      </MemoryRouter>
    );

    expect(wrapper.find(RankList).exists()).toBe(true);
  });

  it('should can redirect to /home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/rank']}>
        <Rank />
      </MemoryRouter>
    );

    expect(wrapper.find('Link').props().to).toBe('/home');
  });
});
