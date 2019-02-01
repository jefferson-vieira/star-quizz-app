import React from 'react';
import { MemoryRouter } from 'react-router';

import { shallow, mount } from 'enzyme';

import App from '../src/App';

import Home from '../src/pages/home/Home';
import Game from '../src/pages/game/Game';

describe('Testing App Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing Router...', () => {
  it('should / refers to /home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('can redirect to /home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('can redirect to /game', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/game']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Game)).toHaveLength(1);
  });
});
