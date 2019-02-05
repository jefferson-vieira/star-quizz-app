import React from 'react';
import { shallow, mount } from 'enzyme';

import RankList from '../../../src/pages/Rank/RankList';

describe('Testing RankList Component...', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<RankList players={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should has/not has score table', () => {
    const props = { players: [] };
    const wrapper = mount(<RankList {...props} />);

    expect(wrapper.find('table').exists()).toBe(false);

    wrapper.setProps({ players: [1, 2, 3] });
    expect(wrapper.find('table').exists()).toBe(true);
    expect(wrapper.find('table').find('tbody').isEmptyRender()).toBe(false);
  });
});
