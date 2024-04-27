import React from 'react';
import { render, screen } from '@testing-library/react';
import SecondPage from './SecondPage';
import '@testing-library/jest-dom/extend-expect'; // Extend jest matchers

describe('SecondPage', () => {
    test('renders component with loading state', async () => {
        render(<SecondPage />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    // Write more tests to cover other scenarios
});
