// import React from 'react';
// import { usePortfolio } from '../context/PortfolioContext';
// import MinimalTemplate from '../templates/MinimalTemplate';
// // import ProfessionalTemplate from '../templates/ProfessionalTemplate';

// const PreviewPage = () => {
//   const { portfolio } = usePortfolio();

//   const renderTemplate = () => {
//     switch(portfolio.uiSettings.template) {
//       case 'professional':
//         return <MinimalTemplate portfolio={portfolio} />;
//       case 'minimal':
//       default:
//         return <MinimalTemplate portfolio={portfolio} />;
//     }
//   };

//   return (
//     <div style={{
//       fontFamily: portfolio.uiSettings.fontFamily,
//       color: portfolio.uiSettings.isDarkMode ? '#fff' : '#333',
//       backgroundColor: portfolio.uiSettings.isDarkMode ? '#1a1a1a' : '#fff',
//       minHeight: '100vh'
//     }}>
//       {renderTemplate()}
//     </div>
//   );
// };

// export default PreviewPage;


import React, { useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import MinimalTemplate from '../templates/MinimalTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';

const PreviewPage = () => {
  const { portfolio } = usePortfolio();

  // Notify parent window when content changes
  useEffect(() => {
    if (window.parent) {
      window.parent.postMessage({
        type: 'PREVIEW_LOADED',
        data: portfolio
      }, '*');
    }
  }, [portfolio]);

  const renderTemplate = () => {
    switch(portfolio.uiSettings.template) {
      case 'professional':
        return <ProfessionalTemplate portfolio={portfolio} />;
      case 'minimal':
      default:
        return <MinimalTemplate portfolio={portfolio} />;
    }
  };

  return (
    <div style={{
      fontFamily: portfolio.uiSettings.fontFamily,
      color: portfolio.uiSettings.isDarkMode ? '#fff' : '#333',
      backgroundColor: portfolio.uiSettings.isDarkMode ? '#1a1a1a' : '#fff',
      minHeight: '100vh'
    }}>
      {renderTemplate()}
    </div>
  );
};

export default PreviewPage;