import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PersonalSection } from '../components/organisms/PersonalSection';

describe('PersonalSection Organism', () => {
    it('Debe renderizar el título "Mi portafolio"', () => {
        render(<PersonalSection />);
        const mainTitle = screen.getByRole('heading', { level: 1, name: /mi portafolio/i });
        expect(mainTitle).toBeInTheDocument();
    });

    it('Debe renderizar el nombre del usuario y el cargo', () => {
        render(<PersonalSection />);
        expect(screen.getByText('Tomas Matias Morales Solis.')).toBeInTheDocument();
        expect(screen.getByText('Desarrollador de Software.')).toBeInTheDocument();
    });
});