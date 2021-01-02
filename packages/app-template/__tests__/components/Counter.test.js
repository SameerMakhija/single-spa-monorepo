import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Counter from '../../src/components/Counter';
import { mockStore } from '../test-utils';

describe('Counter component', () => {
    it('should be in the document', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Counter />
            </Provider>,
        );
        expect(getByTestId('counter')).toBeInTheDocument();
    });
    it('should increment counter', () => {
        const { getByText } = render(
            <Provider store={mockStore}>
                <Counter />
            </Provider>,
        );
        fireEvent.click(screen.getByText('Increment Counter'));
        expect(getByText('1')).toBeInTheDocument();
    });
    it('should decrement counter', () => {
        const { getByText } = render(
            <Provider store={mockStore}>
                <Counter />
            </Provider>,
        );
        fireEvent.click(screen.getByText('Decrement Counter'));
        expect(getByText('0')).toBeInTheDocument();
    });
});
