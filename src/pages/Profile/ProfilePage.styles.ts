import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f9f9f9;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const AuthCard = styled.div`
  background-color: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 420px;

  @media (max-width: 480px) {
    padding: 2rem 1.25rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.75rem;
  color: #4F46E5;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
  border: 2px solid #4F46E5;
`;

export const ProfileName = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: #333;
  text-align: center;
`;

export const ProfileEmail = styled.p`
  color: #666;
  font-size: 0.95rem;
  text-align: center;
  word-break: break-word;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InfoLabel = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: #4F46E5;
`;

export const InfoValue = styled.p`
  color: #444;
  word-break: break-word;
  font-size: 0.95rem;
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 0.85rem 1rem;
  margin-top: 2rem;
  background-color: #ef4444; /* Red-500 */
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #dc2626; /* Red-600 */
  }
`;
