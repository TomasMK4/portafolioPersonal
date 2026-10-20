import { Title } from '../atoms/Title';
import { ExperienceCard } from '../molecules/ExperienceCard';

export const ExperienceSection = () => {
    const experiences = [
        { id: 1, position: 'Runner (Barra y Cocina)', company: 'Cerveceria Kross (Taproom Curacavi)', period: 'Diciembre 2024 - Septiembre 2026' },
        { id: 2, position: 'Garzon', company: 'Cerveceria Kross (Taproom Curacavi)', period: 'Enero 2025 - Septiembre 2026' },
        { id: 3, position: 'Bartender', company: 'Cerveceria Kross (Taproom Curacavi)', period: 'Julio 2025 - Septiembre 2026' },
        { id: 4, position: 'Desarrollo de modelo de negocios', company: 'Servicio Independiente', period: 'Junio 2026 - Presente' },
        { id: 5, position: 'Product Manager', company: 'Servicio independiente', period: 'Marzo 2025 - Presente' },
        { id: 6, position: 'Gestor de productos', company: 'Servicio independiente', period: 'Marzo 2025 - Presente' }
    ];

    return (
        <section id="experiencia" className="section experience-section">
            <Title level={2}>Experiencia Laboral</Title>
            <div className="experience-list">
                {experiences.map(({ id, position, company, period }) => (
                    <ExperienceCard key={id} position={position} company={company} period={period} />
                ))}
            </div>
        </section>
    );
};