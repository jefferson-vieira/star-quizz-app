import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../../src/pages/NotFound/NotFound';

describe('Testing NotFound Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
