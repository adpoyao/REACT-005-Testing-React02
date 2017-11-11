import React from 'react'
import { shallow, mount } from 'enzyme'
import GuessForm from './guess-form'

describe('<GuessForm />', () => {
  let wrapper;

  it('should not cause apocalypse', () => {
    shallow(<GuessForm />)
  })

  it('should trigger callback upon form submission', () => {
    const callback = jest.fn();
    const value = '5';
    wrapper = mount(<GuessForm onGuess={callback}/>);
    wrapper.find('input[type="text"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
  })
})