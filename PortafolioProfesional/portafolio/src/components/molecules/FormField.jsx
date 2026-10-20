import { Input } from '../atoms/Input';
import { Text } from '../atoms/Text';

export const FormField = ({ label, name, type, value, onChange, placeholder, required, isTextArea, error }) => {
    return (
        <div className="form-field">
            <label htmlFor={name} className="form-label">{label}</label>
            <Input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                isTextArea={isTextArea}
            />
            {error && <Text className="field-error">{error}</Text>}
        </div>
    );
};