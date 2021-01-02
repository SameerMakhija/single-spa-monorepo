import React from 'react';
import { render } from '@testing-library/react';
import Counter from '../../src/components/Counter';

describe('Counter component', () => {
    it('should be in the document', () => {
        const { getByTestId } = render(<Counter />);
        expect(getByTestId('counter')).toBeInTheDocument();
    });
});
