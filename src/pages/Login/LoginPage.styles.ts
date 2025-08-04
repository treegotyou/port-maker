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
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  }

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

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.85rem 1rem;
  background-color: #4F46E5;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4338ca; /* Slightly darker indigo */
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
