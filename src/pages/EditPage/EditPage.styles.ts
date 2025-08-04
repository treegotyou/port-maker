import styled from 'styled-components';

export const EditPageContainer = styled.div`
  padding: 2rem;
  width: 100%;
  min-height: 100vh;
  background-color: #f8fafc;
`;

export const PageHeader = styled.div`
  // max-width: 1400px;
  width: 100%;
  margin: 0 auto 2rem;
  text-align: center;

  h1 {
    color: #4F46E5;
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #E5E7EB;
  // max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

// export const TabButton = styled.button<{ active: boolean }>`
//   padding: 1rem 2rem;
//   background: none;
//   border: none;
//   border-bottom: 3px solid ${({ active }) => active ? '#4F46E5' : 'transparent'};
//   color: ${({ active }) => active ? '#4F46E5' : '#6B7280'};
//   font-weight: 600;
//   font-size: 1.1rem;
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     color: #4F46E5;
//   }

//   @media (max-width: 768px) {
//     padding: 0.75rem 1.25rem;
//     font-size: 1rem;
//   }
// `;

export const TabButton = styled.button<{ $active: boolean }>`
  padding: 1rem 2rem;
  background: none;
  border: none;
  border-bottom: 3px solid ${({ $active }) => $active ? '#4F46E5' : 'transparent'};
  color: ${({ $active }) => $active ? '#4F46E5' : '#6B7280'};
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s;

    &:hover {
    color: #4F46E5;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
  }
`;

export const TabContent = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  // max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

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

export const UIEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const UISection = styled.div`
  h3 {
    color: #4F46E5;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const TemplateCard = styled.div`
  border: 1px solid #E5E7EB;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .template-preview {
    height: 180px;
    background-color: #F3F4F6;
    border-bottom: 1px solid #E5E7EB;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0.2) 100%);
    }
  }

  p {
    padding: 1.25rem;
    font-weight: 500;
    text-align: center;
    margin: 0;
  }

  button {
    margin: 0 1.25rem 1.25rem;
  }
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

export const ColorOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  .color-preview {
    width: 100%;
    height: 100px;
    border-radius: 0.75rem;
    border: 1px solid #E5E7EB;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.03);
    }
  }

  p {
    font-weight: 500;
    margin: 0;
  }
`;

export const FontGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`;

export const FontOption = styled.div`
  border: 1px solid #E5E7EB;
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  p {
    font-size: 1.25rem;
    margin: 0;
    text-align: center;
  }
`;

export const SelectButton = styled.button`
  background-color: white;
  color: #4F46E5;
  padding: 0.6rem 1.2rem;
  border: 1px solid #4F46E5;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  max-width: 120px;

  &:hover {
    background-color: #4F46E5;
    color: white;
  }
`;

export const CustomColorPicker = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;

  label {
    font-weight: 500;
    font-size: 1rem;
  }

  .color-input-group {
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
      width: 60px;
      height: 40px;
      padding: 0;
      border: none;
      cursor: pointer;
    }

    span {
      font-family: monospace;
      color: #4F46E5;
      font-weight: 500;
    }
  }
`;

export const PreviewButton = styled.button`
  background-color: #4F46E5;
  color: white;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  margin: 2rem auto 0;
  display: block;
  transition: all 0.2s;

  &:hover {
    background-color: #4338CA;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;