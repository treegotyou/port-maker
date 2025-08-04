// import * as S from './ContentEditTab.styles';
// import HeroSectionForm from './SectionForms/HeroSectionForm';
// import AboutSectionForm from './SectionForms/AboutSectionForm';
// // Import other section forms as needed

// const ContentEditTab = () => {
//   const sections = [
//     { id: 'hero', title: 'Hero Section', component: <HeroSectionForm /> },
//     { id: 'about', title: 'About Me', component: <AboutSectionForm /> },

import * as S from './ContentEditTab.styles';
import HeroSectionForm from './SectionForms/HeroSectionForm';
import AboutSectionForm from './SectionForms/AboutSectionForm';
import { usePortfolio } from '../../../context/PortfolioContext';

const ContentEditTab = () => {
  const { portfolio, updatePortfolio } = usePortfolio();

  const sections = [
    { 
      id: 'hero', 
      title: 'Hero Section', 
      component: (
        <HeroSectionForm 
          data={portfolio.hero} 
          onUpdate={(data) => updatePortfolio('hero', data)} 
        />
      ) 
    },
    { 
      id: 'about', 
      title: 'About Me', 
      component: (
        <AboutSectionForm 
          data={portfolio.about} 
          onUpdate={(data) => updatePortfolio('about', data)} 
        />
      ) 
    },
    { id: 'skills', title: 'Skills/Expertise', component: <div>Skills Form</div> },
    { id: 'portfolio', title: 'Portfolio/Work Samples', component: <div>Portfolio Form</div> },
    { id: 'projects', title: 'Project Details', component: <div>Projects Form</div> },
    { id: 'services', title: 'Services', component: <div>Services Form</div> },
    { id: 'testimonials', title: 'Testimonials', component: <div>Testimonials Form</div> },
    { id: 'resume', title: 'Resume/CV', component: <div>Resume Form</div> },
    { id: 'contact', title: 'Contact', component: <div>Contact Form</div> },
    { id: 'footer', title: 'Footer', component: <div>Footer Form</div> },
  ];

//   return (
//     <S.ContentEditContainer>
//       <S.SectionsGrid>
//         {sections.map((section) => (
//           <S.SectionCard key={section.id}>
//             <h3>{section.title}</h3>
//             <S.SectionForm>
//               {section.component}
//               <S.SaveButton>Save {section.title} Changes</S.SaveButton>
//             </S.SectionForm>
//           </S.SectionCard>
//         ))}
//       </S.SectionsGrid>
//     </S.ContentEditContainer>
//   );
// };

// export default ContentEditTab;

  return (
    <S.ContentEditContainer>
      <S.SectionsGrid>
        {sections.map((section) => (
          <S.SectionCard key={section.id}>
            <h3>{section.title}</h3>
            <S.SectionForm>
              {section.component}
              <S.SaveButton onClick={() => console.log(`Saved ${section.title}`)}>
                Save {section.title} Changes
              </S.SaveButton>
            </S.SectionForm>
          </S.SectionCard>
        ))}
      </S.SectionsGrid>
    </S.ContentEditContainer>
  );
};

export default ContentEditTab;