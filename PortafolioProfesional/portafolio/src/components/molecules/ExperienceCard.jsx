import { Title } from '../atoms/Title';
import { Text } from '../atoms/Text';

export const ExperienceCard = ({ position, company, period }) => {
    return (
        <div className="experience-card">
            <Title level={3} className="exp-position">{position}</Title>
            <Text className="exp-company">{company}</Text>
            <Text className="exp-period">{period}</Text>
        </div>
    );
};