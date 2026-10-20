export const Text = ({ children, as = 'p', className = '' }) => {
    const Tag = as;
    return <Tag className={`text-node ${className}`}>{children}</Tag>;
};