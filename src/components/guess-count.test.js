import React from 'react'
import { shallow } from 'enzyme'
import GuessCount from './guess-count'

describe('<GuessCount />', () => {
  let wrapper;

  it('should not catch fire', () => {
    shallow(<GuessCount />)
  })

  it('Renders the number', () => {
    const count = 5;
    wrapper = shallow(<GuessCount count={count} />);
    expect(wrapper.text()).toEqual(`Guess #${count}!`);
  })
})