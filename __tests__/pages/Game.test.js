import React from 'react';
import { shallow, mount } from 'enzyme';

import Game from '../../src/pages/game/Game';

describe('Testing Game Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper).toMatchSnapshot();
  });
});
