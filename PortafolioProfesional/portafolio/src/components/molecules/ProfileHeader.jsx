import { Title } from '../atoms/Title';
import { Image } from '../atoms/Image';
import { Text } from '../atoms/Text';

export const ProfileHeader = ({ avatarSrc, name, role, bio }) => {
    return (
        <div className="profile-header-card">
            <div className="avatar-wrapper">
                <Image src={avatarSrc} alt={`Avatar de ${name}`} className="avatar-img" />
            </div>
            <div className="profile-badges">
                <span className="badge badge-accent">Microservicios</span>
                <span className="badge">Java / Spring Boot</span>
                <span className="badge">React + Vite</span>
            </div>
            <div className="profile-details">
                <Title level={2} className="user-name">{name}</Title>
                <Text as="h3" className="user-role">{role}</Text>
                <Text className="user-bio">{bio}</Text>
            </div>
        </div>
    );
};