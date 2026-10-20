import { PortfolioTemplate } from '../templates/PortfolioTemplate';
import { PersonalSection } from '../organisms/PersonalSection';
import { ExperienceSection } from '../organisms/ExperienceSection';
import { EducationSection } from '../organisms/EducationSection';
import { ProjectsSection } from '../organisms/ProjectsSection';
import { ContactSection } from '../organisms/ContactSection';
import { Footer } from '../organisms/Footer';


export const PortfolioPage = () => {
    return (
        <PortfolioTemplate
            personal={<PersonalSection />}
            experience={<ExperienceSection />}
            education={<EducationSection />}
            projects={<ProjectsSection />}
            contact={<ContactSection />}
            footer={<Footer />}
        />
    );
};