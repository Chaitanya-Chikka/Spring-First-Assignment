import React from 'react';
import { render, screen } from '@testing-library/react';
import SpringNasaComponent from './springNasaComponent';
import '@testing-library/jest-dom/extend-expect'; 

describe('SpringNasaComponent', () => {
    test('renders component with loading state', async () => {
        render(<SpringNasaComponent />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

});
