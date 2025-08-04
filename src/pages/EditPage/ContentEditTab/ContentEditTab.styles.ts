import styled from 'styled-components';

export const ContentEditContainer = styled.div`
  width: 100%;
`;

export const SectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionCard = styled.div`
  border: 1px solid #E5E7EB;
  border-radius: 0.75rem;
  padding: 1.75rem;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  h3 {
    color: #4F46E5;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

export const SectionForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const SaveButton = styled.button`
  background-color: #4F46E5;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  align-self: flex-start;
  transition: all 0.2s;
  font-size: 1rem;

  &:hover {
    background-color: #4338CA;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 500;
    color: #374151;
    font-size: 0.95rem;
  }

  input, textarea {
    padding: 0.75rem 1rem;
    border: 1px solid #D1D5DB;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: #4F46E5;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FileUploadContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  input[type="file"] {
    display: none;
  }

  label {
    background-color: #f1f5f9;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: 0.9rem;

    &:hover {
      background-color: #e2e8f0;
    }
  }
`;