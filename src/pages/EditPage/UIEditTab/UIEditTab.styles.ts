import styled from 'styled-components';

export const UIEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px);
  position: relative;
`;

export const ControlsContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const EditTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.5rem;
`;

export const EditTabButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ active }) => active ? '#4F46E5' : 'transparent'};
  color: ${({ active }) => active ? '#4F46E5' : '#64748b'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #4F46E5;
  }
`;

export const EditPanel = styled.div`
  padding: 1rem 0;
`;


export const PreviewToggleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  background: #f1f5f9;
  padding: 0.25rem;
  border-radius: 6px;
  width: fit-content;
`;

// In your styled component definition
export const TabButton = styled.button<{ $active: boolean }>`
  padding: 1rem 2rem;
  background: none;
  border: none;
  border-bottom: 3px solid ${({ $active }) => $active ? '#4F46E5' : 'transparent'};
  color: ${({ $active }) => $active ? '#4F46E5' : '#6B7280'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
`;

export const ToggleButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: ${({ active }) => active ? 'white' : 'transparent'};
  color: ${({ active }) => active ? '#4F46E5' : '#64748b'};
  font-weight: 500;
  cursor: pointer;
  box-shadow: ${({ active }) => active ? '0 1px 2px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.2s;

  svg {
    stroke: ${({ active }) => active ? '#4F46E5' : '#64748b'};
  }

  &:hover {
    color: #4F46E5;
    svg {
      stroke: #4F46E5;
    }
  }
`;

export const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

export const TemplateCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`;

export const TemplatePreview = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  .template-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0.2) 100%);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

export const TemplateName = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const SelectButton = styled.button`
  background-color: #4F46E5;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;

  &:hover {
    background-color: #4338CA;
  }
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const ColorOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const ColorPreview = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #e2e8f0;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ColorName = styled.p`
  font-size: 0.875rem;
  margin: 0;
`;

export const CustomColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  label {
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

export const ColorInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input[type="color"] {
    width: 40px;
    height: 40px;
    padding: 0;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    cursor: pointer;
  }

  span {
    font-family: monospace;
    font-size: 0.875rem;
    color: #4F46E5;
  }
`;

export const FontGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

export const FontOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    border-color: #4F46E5;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`;

export const FontPreview = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const FontName = styled.p`
  font-size: 0.875rem;
  margin: 0;
`;

export const PreviewContainer = styled.div<{ previewMode: 'desktop' | 'mobile' }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f5f9;
  padding: 1rem;
  overflow: auto;
  position: relative;

  .preview-iframe {
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    background: white;
    width: ${({ previewMode }) => previewMode === 'desktop' ? '100%' : '375px'};
    height: ${({ previewMode }) => previewMode === 'desktop' ? '100%' : '667px'};
    transition: all 0.3s ease;
    
    /* Add mobile frame styling */
    ${({ previewMode }) => previewMode === 'mobile' && `
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: -15px;
        left: -15px;
        right: -15px;
        bottom: -15px;
        border: 2px solid #e2e8f0;
        border-radius: 20px;
        pointer-events: none;
      }
      
      &::after {
        content: '';
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 20px;
        background: #e2e8f0;
        border-radius: 0 0 10px 10px;
      }
    `}
  }
`;
