import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

describe('App component', () => {
    it('should be in the document', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('app-template')).toBeInTheDocument();
    });
});
