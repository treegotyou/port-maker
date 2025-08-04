import { useState, useEffect } from 'react';
import * as S from './UIEditTab.styles';
import PreviewToggle from './PreviewToggle';
import TemplateSelector from './TemplateSelector';
import ThemeEditor from './ThemeEditor';
import FontSelector from './FontSelector';
import { usePortfolio } from '../../../context/PortfolioContext';

const UIEditTab = () => {
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'templates' | 'colors' | 'fonts'>('templates');
  const [previewKey, setPreviewKey] = useState(0); // Used to force iframe reload
  const { portfolio } = usePortfolio();

  // Force iframe reload when portfolio data changes
  useEffect(() => {
    setPreviewKey(prev => prev + 1);
  }, [portfolio]);

  // Add this useEffect to UIEditTab component
    useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
        if (event.data.type === 'PREVIEW_LOADED') {
        console.log('Preview loaded with data:', event.data.data);
        // You can use this to confirm the iframe is ready
        }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
    }, []);

  return (
    <S.UIEditContainer>
      <S.ControlsContainer>
        <PreviewToggle 
          previewMode={previewMode} 
          setPreviewMode={setPreviewMode} 
        />

        <S.EditTabs>
          <S.EditTabButton 
            active={activeTab === 'templates'}
            onClick={() => setActiveTab('templates')}
          >
            Templates
          </S.EditTabButton>
          <S.EditTabButton 
            active={activeTab === 'colors'}
            onClick={() => setActiveTab('colors')}
          >
            Colors
          </S.EditTabButton>
          <S.EditTabButton 
            active={activeTab === 'fonts'}
            onClick={() => setActiveTab('fonts')}
          >
            Fonts
          </S.EditTabButton>
        </S.EditTabs>

        <S.EditPanel>
          {activeTab === 'templates' && <TemplateSelector />}
          {activeTab === 'colors' && <ThemeEditor />}
          {activeTab === 'fonts' && <FontSelector />}
        </S.EditPanel>
      </S.ControlsContainer>

      <S.PreviewContainer previewMode={previewMode}>
        {/* <iframe 
          key={previewKey}
          src="/preview" 
          title="Portfolio Preview" 
          className="preview-iframe"
          sandbox="allow-same-origin" // Needed for same-origin communication
        /> */}
        <iframe 
            key={previewKey}
            src="/preview" 
            title="Portfolio Preview" 
            className="preview-iframe"
            sandbox="allow-same-origin allow-scripts"
        />
      </S.PreviewContainer>
    </S.UIEditContainer>
  );
};

export default UIEditTab;