import * as S from './UIEditTab.styles';

const PreviewToggle = ({ 
  previewMode, 
  setPreviewMode 
}: { 
  previewMode: 'desktop' | 'mobile', 
  setPreviewMode: (mode: 'desktop' | 'mobile') => void 
}) => {
  return (
    <S.PreviewToggleContainer>
      <S.ToggleButton
        active={previewMode === 'desktop'}
        onClick={() => setPreviewMode('desktop')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19H21C22.1046 19 23 18.1046 23 17V5C23 3.89543 22.1046 3 21 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 15H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Desktop
      </S.ToggleButton>
      <S.ToggleButton
        active={previewMode === 'mobile'}
        onClick={() => setPreviewMode('mobile')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 18H12.01M8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Mobile
      </S.ToggleButton>
    </S.PreviewToggleContainer>
  );
};

export default PreviewToggle;

// import * as S from './UIEditTab.styles';

// const PreviewToggle = ({ 
//   previewMode, 
//   setPreviewMode 
// }: { 
//   previewMode: 'desktop' | 'mobile', 
//   setPreviewMode: (mode: 'desktop' | 'mobile') => void 
// }) => {
//   return (
//     <S.PreviewToggleContainer>
//       <S.ToggleButton
//         $active={previewMode === 'desktop'}
//         onClick={() => setPreviewMode('desktop')}
//       >
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M21 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19H21C22.1046 19 23 18.1046 23 17V5C23 3.89543 22.1046 3 21 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           <path d="M1 15H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//         Desktop
//       </S.ToggleButton>
//       <S.ToggleButton
//         $active={previewMode === 'mobile'}
//         onClick={() => setPreviewMode('mobile')}
//       >
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12 18H12.01M8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//         Mobile
//       </S.ToggleButton>
//     </S.PreviewToggleContainer>
//   );
// };

// export default PreviewToggle;