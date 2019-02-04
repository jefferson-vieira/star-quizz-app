
import React from 'react';
import { MemoryRouter } from 'react-router';

import { shallow, mount } from 'enzyme';

import App from '../src/App';

import Home from '../src/pages/Home/Home';
import Game from '../src/pages/Game/Game';
import Rank from '../src/pages/Rank/Rank';

import NotFound from '../src/pages/NotFound/NotFound';

describe('Testing App Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing Router...', () => {
  it('should path / redirects to Home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('should path /home redirects to Home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('should path /game redirects to Game', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/game']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Game)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('should path /rank redirects to Rank', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/rank']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Rank)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('should invalid path redirects to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Game)).toHaveLength(0);
    expect(wrapper.find(Rank)).toHaveLength(0);

    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
