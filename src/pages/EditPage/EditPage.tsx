import { useState } from 'react';
import ContentEditTab from './ContentEditTab';
import UIEditTab from './UIEditTab';
import * as S from './EditPage.styles';

const EditPage = () => {
  const [activeTab, setActiveTab] = useState<'content' | 'ui'>('content');

  return (
    <S.EditPageContainer>
      <S.PageHeader>
        {/* <h1>Edit Your Portfolio</h1> */}
        <S.TabContainer>
          {/* <S.TabButton 
            active={activeTab === 'content'} 
            onClick={() => setActiveTab('content')}
          >
            Content Edit
          </S.TabButton> */}
          <S.TabButton 
            $active={activeTab === 'content'} 
            onClick={() => setActiveTab('content')}
            >
            Content Edit
          </S.TabButton>

          <S.TabButton 
            $active={activeTab === 'ui'} 
            onClick={() => setActiveTab('ui')}
            >
            UI Edit
          </S.TabButton>
          {/* <S.TabButton 
            active={activeTab === 'ui'} 
            onClick={() => setActiveTab('ui')}
          >
            UI Edit
          </S.TabButton> */}
        </S.TabContainer>
      </S.PageHeader>

      <S.TabContent>
        {activeTab === 'content' ? <ContentEditTab /> : <UIEditTab />}
      </S.TabContent>
    </S.EditPageContainer>
  );
};

export default EditPage;