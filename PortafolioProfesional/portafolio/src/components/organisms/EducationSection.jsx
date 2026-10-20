import { Title } from '../atoms/Title';
import { EducationCard } from '../molecules/EducationCard';

export const EducationSection = () => {
    return (
        <section id="estudios" className="section education-section">
            <Title level={2}>Formación Académica</Title>
            <EducationCard
                degree="Analista Programador"
                institution="Duoc UC - Sede Maipu"
            />
        </section>
    );
};