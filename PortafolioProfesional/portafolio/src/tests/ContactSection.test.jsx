import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactSection } from '../components/organisms/ContactSection';

describe('ContactSection Form Validation', () => {
    it('Debe mostrar mensajes de validación si se envía el formulario vacío', () => {
        render(<ContactSection />);
        const submitBtn = screen.getByText(/enviar mensaje/i);
        fireEvent.click(submitBtn);

        expect(screen.getByText(/el nombre es obligatorio/i)).toBeInTheDocument();
        expect(screen.getByText(/el correo es obligatorio/i)).toBeInTheDocument();
        expect(screen.getByText(/el mensaje no puede estar vacío/i)).toBeInTheDocument();
    });
});