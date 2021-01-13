import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Counter from '../../components/Counter';
import { mockStore } from '../test-utils';

describe('Counter component', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('should be in the document', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Counter />
            </Provider>,
        );
        expect(getByTestId('counter')).toBeInTheDocument();
    });
    it('should increment counter', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Counter />
            </Provider>,
        );
        fireEvent.click(screen.getByText('Increment Counter'));
        expect(getByTestId('counter-title').textContent).toEqual('1');
    });
    it('should decrement counter', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Counter />
            </Provider>,
        );
        fireEvent.click(screen.getByText('Decrement Counter'));
        expect(getByTestId('counter-title').textContent).toEqual('0');
    });
    it('should log counter pending', async () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Counter />
            </Provider>,
        );
        expect(getByTestId('counter-subtitle').textContent).toEqual(
            'Log Value: 0',
        );
        fireEvent.click(screen.getByText('Increment Counter'));
        fireEvent.click(screen.getByText('Log Counter (3000ms Delay)'));
        expect(getByTestId('counter-subtitle').textContent).toEqual(
            'Log Value: pending...',
        );
        await waitFor(() =>
            expect(getByTestId('counter-subtitle').textContent).toEqual(
                'Log Value: 1',
            ),
        );
    });
});
