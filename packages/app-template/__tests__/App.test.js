import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';
import { mockStore } from './test-utils';

describe('App component', () => {
    it('should be in the document', () => {
        const { getByTestId } = render(<App store={mockStore} />);
        expect(getByTestId('app-template')).toBeInTheDocument();
    });
});
