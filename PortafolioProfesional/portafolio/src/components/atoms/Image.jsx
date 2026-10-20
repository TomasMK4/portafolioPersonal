export const Image = ({ src, alt, className = '', style = {} }) => {
    return <img src={src} alt={alt} className={`custom-img ${className}`} style={style} />;
};