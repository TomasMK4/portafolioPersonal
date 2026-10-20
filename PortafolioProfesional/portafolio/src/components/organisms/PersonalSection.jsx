import { Title } from '../atoms/Title';
import { ProfileHeader } from '../molecules/ProfileHeader';
import miFotoImg from '../../assets/miFoto.jpeg';

export const PersonalSection = () => {
    const avatarPath = miFotoImg;

    const bioText = `Soy Analista Programador me encuentro en formacion, disfruto del desarrollo de aplicaciones moviles y paginas web, tambien me manejo en la arquitectura de microservicios con Java. Me enfoco en realizar un codigo mas eficiente y con una estructura clara, acostumbro a mantenerme informado con las nuevas tecnologias para estar al dia e implementarlo en nuevos proyectos, busco mantener un aprendizaje constante de distintas habilidades tanto a nivel profesional como personal logrando mantener conocimientos tanto dentro de mi area de programador como de otras areas como la administracion de empresas y economia.`;

    return (
        <section id="personal" className="section personal-section">
            <Title level={1} className="main-title">Portafolio Profesional</Title>

            <ProfileHeader
                avatarSrc= {avatarPath}
                name="Tomas Matias Morales Solis."
                role="Desarrollador de Software."
                bio={bioText}
            />
        </section>
    );
};