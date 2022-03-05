import React from 'react';

describe('JSX', () => {
    it('calls React.createElement', () => {
        const createElSpy = jest.spyOn(React, 'createElement');
        <h1>Hello, JSX</h1>;
        expect(createElSpy).toHaveBeenCalledWith('h1', null, 'Hello, JSX');
    })
})