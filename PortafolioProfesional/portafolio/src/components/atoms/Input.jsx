export const Input = ({ type = 'text', name, value, onChange, placeholder, required = false, isTextArea = false }) => {
    if (isTextArea) {
        return (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="custom-input textarea-input"
                rows={4}
            />
        );
    }
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="custom-input"
        />
    );
};