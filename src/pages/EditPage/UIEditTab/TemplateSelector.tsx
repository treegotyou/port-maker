import * as S from './UIEditTab.styles';

const templates = [
  { id: 'minimal', name: 'Minimal', color: '#f3f4f6' },
  { id: 'creative', name: 'Creative', color: '#e0f2fe' },
  { id: 'professional', name: 'Professional', color: '#e0e7ff' },
  { id: 'modern', name: 'Modern', color: '#ecfdf5' },
];

const TemplateSelector = () => {
  return (
    <S.TemplateGrid>
      {templates.map(template => (
        <S.TemplateCard key={template.id}>
          <S.TemplatePreview style={{ backgroundColor: template.color }}>
            <div className="template-placeholder"></div>
          </S.TemplatePreview>
          <S.TemplateName>{template.name}</S.TemplateName>
          <S.SelectButton>Select</S.SelectButton>
        </S.TemplateCard>
      ))}
    </S.TemplateGrid>
  );
};

export default TemplateSelector;