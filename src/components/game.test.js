import React from 'react'
import { shallow } from 'enzyme'
import Game from './game'

describe('<Game />', () => {
  let wrapper;

  it('Render doesn\'t explode', () => {
    shallow(<Game />)
  })

  it('should have correct initial state', () => {
      wrapper = shallow(<Game />);
      expect(wrapper.state('guesses')).toEqual([]);
      expect(wrapper.state('feedback')).toEqual('Make your guess!');
      expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
      expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  })

  it('should reset state when newGame() is called', () => {
      wrapper = shallow(<Game />);
      wrapper.setState({ feedback: 'Banana' });    
      wrapper.instance().newGame();
      wrapper.update();
      expect(wrapper.state('guesses')).toEqual([]);
      expect(wrapper.state('feedback')).toEqual('Make your guess!');
      expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
      expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  })

  it('should update state when guess is called', () => {
      const guess = '10';      
      wrapper = shallow(<Game />);
      wrapper.instance().guess(guess);
      wrapper.update();
      const lastGuess = wrapper.state('guesses').slice(-1)[0];
      expect(lastGuess).toEqual(10);
      expect(wrapper.state('feedback')).not.toEqual('Make your guess!');
  })

  it('should alert user when guess is not a number', () => {
      const guess = 'banana';
      wrapper = shallow(<Game />);
      wrapper.instance().guess(guess);
      wrapper.update();
      expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
  })
})