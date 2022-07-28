import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';
import { MemoryRouter } from 'react-router-dom';

describe('Buttons', () => {
    it('xs button renders', () => {
        render(
            <MemoryRouter>
                <Button to="/" message='Demo message' size='xs' />
            </MemoryRouter>
        );
        
        expect(screen.getByText('Demo message')).toBeInTheDocument();
    });

    it('lg button renders', () => {
        render(
            <MemoryRouter>
                <Button to="/" message='Demo message' size='lg' />
            </MemoryRouter>
        );
        
        expect(screen.getByText('Demo message')).toBeInTheDocument();
    });
});
