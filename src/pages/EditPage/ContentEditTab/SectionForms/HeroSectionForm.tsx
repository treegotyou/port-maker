// import * as S from '../ContentEditTab.styles';

// const HeroSectionForm = () => {
//   return (
//     <>
//       <S.FormField>
//         <label>Title</label>
//         <input type="text" placeholder="Your name/title" />
//       </S.FormField>
//       <S.FormField>
//         <label>Subtitle</label>
//         <input type="text" placeholder="Your professional tagline" />
//       </S.FormField>
//       <S.FormField>
//         <label>Hero Image</label>
//         <S.FileUploadContainer>
//           <input type="file" accept="image/*" id="hero-image" />
//           <label htmlFor="hero-image">Choose Image</label>
//         </S.FileUploadContainer>
//       </S.FormField>
//       <S.FormRow>
//         <S.FormField style={{ flex: 1 }}>
//           <label>CTA Button Text</label>
//           <input type="text" placeholder="e.g. View My Work" />
//         </S.FormField>
//         <S.FormField style={{ flex: 1 }}>
//           <label>CTA Link</label>
//           <input type="text" placeholder="/portfolio" />
//         </S.FormField>
//       </S.FormRow>
//     </>
//   );
// };

// export default HeroSectionForm;


import React, { useState } from 'react';
import * as S from '../ContentEditTab.styles';

const HeroSectionForm = ({ 
  data, 
  onUpdate 
}: { 
  data: any;
  onUpdate: (data: any) => void;
}) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const updated = { ...formData, imageUrl: reader.result as string };
        setFormData(updated);
        onUpdate(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.FormField>
        <label>Title</label>
        <input 
          type="text" 
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Your name/title" 
        />
      </S.FormField>
      <S.FormField>
        <label>Subtitle</label>
        <input 
          type="text" 
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          placeholder="Your professional tagline" 
        />
      </S.FormField>
      <S.FormField>
        <label>Hero Image</label>
        <S.FileUploadContainer>
          <input 
            type="file" 
            accept="image/*" 
            id="hero-image" 
            onChange={handleImageChange}
          />
          <label htmlFor="hero-image">Choose Image</label>
        </S.FileUploadContainer>
        {formData.imageUrl && (
          <div style={{ marginTop: '1rem' }}>
            <img 
              src={formData.imageUrl} 
              alt="Preview" 
              style={{ maxWidth: '100%', maxHeight: '200px' }} 
            />
          </div>
        )}
      </S.FormField>
      <S.FormRow>
        <S.FormField style={{ flex: 1 }}>
          <label>CTA Button Text</label>
          <input 
            type="text" 
            name="ctaText"
            value={formData.ctaText}
            onChange={handleChange}
            placeholder="e.g. View My Work" 
          />
        </S.FormField>
        <S.FormField style={{ flex: 1 }}>
          <label>CTA Link</label>
          <input 
            type="text" 
            name="ctaLink"
            value={formData.ctaLink}
            onChange={handleChange}
            placeholder="/portfolio" 
          />
        </S.FormField>
      </S.FormRow>
    </form>
  );
};

export default HeroSectionForm;