export const Button = ({ children, onClick, type = 'button', href, target = '_blank', className = '' }) => {
    if (href) {
        return (
            <a href={href} target={target} rel="noopener noreferrer" className={`custom-button ${className}`}>
                {children}
            </a>
        );
    }
    return (
        <button type={type} onClick={onClick} className={`custom-button ${className}`}>
            {children}
        </button>
    );
};