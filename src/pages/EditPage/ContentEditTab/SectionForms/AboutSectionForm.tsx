import React, { useState } from 'react';
import * as S from '../ContentEditTab.styles';

// const AboutSectionForm = () => {

const AboutSectionForm = ({ 
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
    <>
        <S.FormField>
        <label>About Text</label>
        <textarea placeholder="Tell your story..." rows={5} />
        </S.FormField>
        <S.FormField>
        <label>Profile Image</label>
        <S.FileUploadContainer>
            <input 
                type="file" 
                accept="image/*" 
                id="profile-image" 
                onChange={handleImageChange}
            />
            <label htmlFor="profile-image">Choose Image</label>
        </S.FileUploadContainer>
        </S.FormField>
    </>
    );
};

export default AboutSectionForm;