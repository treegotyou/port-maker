import * as S from './UIEditTab.styles';

const fonts = [
  { id: 'roboto', name: 'Roboto', family: 'Roboto' },
  { id: 'inter', name: 'Inter', family: 'Inter' },
  { id: 'poppins', name: 'Poppins', family: 'Poppins' },
  { id: 'montserrat', name: 'Montserrat', family: 'Montserrat' },
  { id: 'opensans', name: 'Open Sans', family: 'Open Sans' },
];

const FontSelector = () => {
  return (
    <S.FontGrid>
      {fonts.map(font => (
        <S.FontOption key={font.id}>
          <S.FontPreview style={{ fontFamily: font.family }}>
            Aa Bb Cc
          </S.FontPreview>
          <S.FontName>{font.name}</S.FontName>
          <S.SelectButton>Apply</S.SelectButton>
        </S.FontOption>
      ))}
    </S.FontGrid>
  );
};

export default FontSelector;