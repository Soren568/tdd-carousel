import React from 'react';
import { configure, shallow } from 'enzyme'; // 2
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CarouselButton from '../CarouselButton';

configure({ adapter: new Adapter() })

describe('CarouselButton', () => {
    it('renders a <button>', () => {
        const wrapper = shallow(<CarouselButton />);
        expect(wrapper.type()).toBe('button')
    })
})