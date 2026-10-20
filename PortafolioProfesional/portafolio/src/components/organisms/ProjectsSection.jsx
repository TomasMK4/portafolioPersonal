import { Title } from '../atoms/Title';
import { ProjectCard } from '../molecules/ProjectCard';
import portalBesImg from '../../assets/portalBes.png';
import blackoutImg from '../../assets/blackoutMicroservicios.png';


export const ProjectsSection = () => {
    const projects = [
        {
            /*Este proyecto se hizo en conjunto con otros compañeros en su momento
            * Para la materia de Ingenieria de Software por lo que es probable que aparezca en el portafolio de otros
            * compañeros profesor, para que lo tenga en cuenta */
            id: 1,
            title: 'Portal BES',
            imageSrc: portalBesImg,
            repoUrl: 'https://github.com/Rakipso/Portal_Bes'
        },
        {
            /*Con este proyecto ocurre exactamente lo mismo que se realizo para Fullstack 1*/
            id: 2,
            title: 'BlackOut V5.1 - BackEnd',
            imageSrc: blackoutImg,
            repoUrl: 'https://github.com/vicenteFrias/BlackOut-Manager/tree/main/Proyecto%20BLACKOUT%20EA3/Vicente_Frias_Tomas_Morales_010D_EA3' // Reemplazar enlace
        }
    ];

    return (
        <section id="proyectos" className="section projects-section">
            <Title level={2}>Proyectos Relevantes</Title>
            <div className="projects-grid">
                {projects.map(({ id, title, imageSrc, repoUrl }) => (
                    <ProjectCard key={id} title={title} imageSrc={imageSrc} repoUrl={repoUrl} />
                ))}
            </div>
        </section>
    );
};