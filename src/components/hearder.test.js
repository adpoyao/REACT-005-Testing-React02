import React from 'react';
import {shallow, mount} from 'enzyme';
import Header from './header';

describe('<Header />', () => {
    let wrapper;

    it('should not sink the Titanic', () => {
      shallow(<Header />);
  })


    it('should toggle state', () => {
      wrapper = shallow(<Header />);
      wrapper.instance().toggleInfoModal();
      wrapper.update();
      wrapper.state('showInfoModal').toBeTruthy;
    })
})