import { Title } from '../atoms/Title';
import { Image } from '../atoms/Image';
import { Button } from '../atoms/Button';

export const ProjectCard = ({ title, imageSrc, repoUrl }) => {
    return (
        <div className="project-card">
            <div className="project-image-container">
                <Image src={imageSrc} alt={`Previsualización de ${title}`} className="project-img" />
            </div>
            <Title level={3} className="project-title">{title}</Title>
            <Button href={repoUrl} className="btn-repo">
                Ver repositorio
            </Button>
        </div>
    );
};