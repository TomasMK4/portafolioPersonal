import { useState } from 'react';
import { Title } from '../atoms/Title';
import { Button } from '../atoms/Button';
import { FormField } from '../molecules/FormField';
import { Text } from '../atoms/Text';

export const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
        if (!formData.email.trim()) {
            newErrors.email = 'El correo es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Ingrese un correo electrónico válido.';
        }
        if (!formData.message.trim()) newErrors.message = 'El mensaje no puede estar vacío.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section id="contacto" className="section contact-section">
            <Title level={2}>Ponte en contacto</Title>

            {/* Botones / Enlaces a Redes Sociales */}
            <div className="social-links" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <Button href="https://www.linkedin.com/in/tomas-morales-a683a9445/">LinkedIn</Button>
                <Button href="https://github.com/TomasMK4">GitHub</Button>
            </div>

            {/* Formulario de Contacto Validado */}
            {submitted && <Text className="success-msg">¡Gracias por contactarme! Te responderé pronto.</Text>}

            <form onSubmit={handleSubmit} noValidate className="contact-form">
                <FormField
                    label="Nombre"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    error={errors.name}
                />
                <FormField
                    label="Correo Electrónico"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    error={errors.email}
                />
                <FormField
                    label="Mensaje"
                    name="message"
                    type="text"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    isTextArea={true}
                    error={errors.message}
                />
                <Button type="submit" className="btn-submit">Enviar Mensaje</Button>
            </form>
        </section>
    );
};