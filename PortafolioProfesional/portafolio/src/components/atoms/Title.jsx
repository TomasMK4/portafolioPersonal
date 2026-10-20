export const Title = ({ level = 1, children, className = '' }) => {
    const Tag = `h${level}`;
    return <Tag className={`title level-${level} ${className}`}>{children}</Tag>;
};
