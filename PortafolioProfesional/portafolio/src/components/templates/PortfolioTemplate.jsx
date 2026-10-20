export const PortfolioTemplate = ({ personal, experience, education, projects, contact, footer }) => {
    return (
        <div className="portfolio-container">
            <main className="main-content">
                {personal}
                {experience}
                {education}
                {projects}
                {contact}
            </main>
            {footer}
        </div>
    );
};