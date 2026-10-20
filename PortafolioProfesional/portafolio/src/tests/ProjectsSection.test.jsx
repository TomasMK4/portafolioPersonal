import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectsSection } from '../components/organisms/ProjectsSection';

describe('ProjectsSection Organism', () => {
    it('Debe renderizar la sección con el título "Proyectos Destacados"', () => {
        render(<ProjectsSection />);
        expect(screen.getByRole('heading', { level: 2, name: /proyectos destacados/i })).toBeInTheDocument();
    });

    it('Debe renderizar los proyectos destacados principales', () => {
        render(<ProjectsSection />);
        expect(screen.getByText('Portal BES')).toBeInTheDocument();
        expect(screen.getByText('BlackOut V5.1 - BackEnd')).toBeInTheDocument();
    });

    it('Debe contener los botones hacia los repositorios de GitHub', () => {
        render(<ProjectsSection />);
        const buttons = screen.getAllByRole('link', { name: /ver repositorio/i });
        expect(buttons.length).toBeGreaterThanOrEqual(2);
    });
});