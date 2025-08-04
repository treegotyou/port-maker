import { useState } from 'react';
import * as S from './UIEditTab.styles';

const themes = [
  { id: 'light', name: 'Light', color: '#ffffff' },
  { id: 'dark', name: 'Dark', color: '#1e293b' },
  { id: 'blue', name: 'Blue', color: '#4F46E5' },
  { id: 'custom', name: 'Custom', color: '#94a3b8' },
];

const ThemeEditor = () => {
  const [customColor, setCustomColor] = useState('#4F46E5');

  return (
    <div>
      <S.ColorGrid>
        {themes.map(theme => (
          <S.ColorOption key={theme.id}>
            <S.ColorPreview 
              style={{ backgroundColor: theme.color }}
              onClick={() => theme.id === 'custom' && setCustomColor('#4F46E5')}
            />
            <S.ColorName>{theme.name}</S.ColorName>
            <S.SelectButton>Apply</S.SelectButton>
          </S.ColorOption>
        ))}
      </S.ColorGrid>

      <S.CustomColorContainer>
        <label>Custom Primary Color</label>
        <S.ColorInputGroup>
          <input 
            type="color" 
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
          />
          <span>{customColor}</span>
        </S.ColorInputGroup>
      </S.CustomColorContainer>
    </div>
  );
};

export default ThemeEditor;