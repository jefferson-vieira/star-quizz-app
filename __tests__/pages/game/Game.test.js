import React from 'react';
import { shallow } from 'enzyme';

import Game from '../../../src/pages/Game/Game';

describe('Testing Game Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper).toMatchSnapshot();
  });
});
