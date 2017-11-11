import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
    let wrapper;
    const guesses=[1, 99, 35, 83, 16];

    it('should not trigger WWIII', () => {
        shallow(<GuessList guesses={guesses}/>);
    })

    it('should render guesses correctly', () => {
        wrapper = shallow(<GuessList guesses={guesses}/>);
        let guessString = guesses.join('');
        expect(wrapper.text()).toEqual(guessString);
    })
})