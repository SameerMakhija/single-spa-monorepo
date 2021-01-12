import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { mockStore } from './test-utils';

describe('App component', () => {
    it('should render loading counter', async () => {
        const { getByText } = render(<App store={mockStore} />);
        const component = getByText('Loading Counter...');
        expect(component).toBeInTheDocument();
    });

    it('should render counter', async () => {
        const { getByTestId } = render(<App store={mockStore} />);
        const component = await getByTestId('counter');
        expect(component).toBeInTheDocument();
    });

    it('should render app in document', async () => {
        const { getByTestId } = render(<App store={mockStore} />);
        const component = await getByTestId('app-template');
        expect(component).toBeInTheDocument();
    });
});
