import { Title } from '../atoms/Title';
import { Text } from '../atoms/Text';

export const EducationCard = ({ degree, institution }) => {
    return (
        <div className="education-card">
            <Title level={3} className="edu-degree">{degree}</Title>
            <Text className="edu-institution">{institution}</Text>
        </div>
    );
};