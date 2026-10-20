import { Text } from '../atoms/Text';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <Text>© {currentYear} Tomas Matias Morales Solis. Todos los derechos reservados.</Text>
            <Text>Contacto directo: tomas.morales@duoc.cl</Text>
        </footer>
    );
};