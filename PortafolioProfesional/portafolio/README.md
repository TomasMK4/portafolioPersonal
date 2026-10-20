💻 Portafolio Profesional Front-End — Tomás Morales
Aplicación web interactiva desarrollada con React y Vite, orientada a presentar de manera clara y estructurada mi perfil como desarrollador, experiencia laboral, formación académica y proyectos destacados en arquitectura de microservicios y desarrollo de software.

El desarrollo se enfoca en código limpio, escalabilidad y buenas prácticas Front-End utilizando la metodología Atomic Design, modularización de componentes, estados dinámicos con React Hooks y pruebas unitarias automatizadas.

🏗️ Arquitectura y Tecnologías
Metodología Atomic Design
El proyecto organiza la interfaz de usuario de manera jerárquica para promover el desacoplamiento y la reutilización de código:

Átomos: Componentes elementales de la interfaz (Button, Image, Input, Text, Title).

Moléculas: Combinaciones funcionales pequeñas de átomos (ProfileHeader, ProjectCard, ExperienceCard, EducationCard, FormField).

Organismos: Secciones completas autorretenidas (PersonalSection, ExperienceSection, EducationSection, ProjectsSection, ContactSection, Footer).

Plantillas / Páginas: Estructura global y ensamblaje de la SPA en App.jsx.

Stack Tecnológico
Librería Principal: React 18+ (JavaScript / JSX).

Bundler y Entorno: Vite.

Diseño y Estilos: Custom CSS3 (Glassmorphism, CSS Grid, Flexbox, variables dinámicas).

Manejo de Estado: React Hooks (useState).

Testing Unitario: Vitest, React Testing Library y happy-dom.

⚡ Instalación y Configuración Local
Sigue estos pasos para clonar y ejecutar el entorno de desarrollo localmente:

1. Requisitos Previos
Asegúrate de contar con:

Node.js v20.19+ o v22+ (o v24 LTS).
npm (gestor de paquetes incluido con Node.js).
Git.

2. Clonar el Repositorio

git clone https://github.com/TomasMK4/portafolioPersonal.git

3. Acceder al Proyecto

cd portafolioPersonal/PortafolioProfesional/portafolio

4. Instalar Dependencias

npm install

5. Iniciar Servidor de Desarrollo

npm run dev

Accede a la dirección local indicada por Vite (por defecto http://localhost:5173/) en tu navegador web.

🧪 Pruebas Automatizadas
La suite de pruebas evalúa los componentes clave de la aplicación (organismos) y el comportamiento interactivo del formulario de contacto (renderizado de entradas, manejo de errores y validación de campos vacíos).

Para ejecutar las pruebas en modo watch:

npm test

Para realizar una sola ejecución de verificación completa:

npx vitest run

📦 Despliegue y Compilación
Para generar la versión compilada y optimizada para producción:

npm run build
Los archivos finales se ubicarán en el directorio dist/.


Para previsualizar localmente el build de producción:

npm run preview

Desarrollado por Tomás Matías Morales Solís para la evaluación del curso Fullstack 2.
