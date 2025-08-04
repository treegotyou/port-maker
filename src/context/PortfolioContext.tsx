import React, { createContext, useContext, useState } from 'react';
// import { PortfolioData } from '../types/portfolio';
import type { PortfolioData } from '../types/portfolio';

const defaultPortfolio: PortfolioData = {
  hero: {
    title: 'Your Name',
    subtitle: 'Professional Title',
    imageUrl: '',
    ctaText: 'View My Work',
    ctaLink: '/portfolio'
  },
  about: {
    content: 'Tell your story here...',
    imageUrl: ''
  },
  skills: { items: [] },
  portfolio: { projects: [] },
  services: { items: [] },
  testimonials: { items: [] },
  resume: {
    fileUrl: '',
    education: [],
    experience: []
  },
  contact: {
    email: '',
    socialLinks: []
  },
  uiSettings: {
    template: 'minimal',
    primaryColor: '#4F46E5',
    fontFamily: 'Inter',
    isDarkMode: false
  }
};

type PortfolioContextType = {
  portfolio: PortfolioData;
  updatePortfolio: (section: keyof PortfolioData, data: any) => void;
  resetSection: (section: keyof PortfolioData) => void;
  saveToDatabase: () => Promise<void>;
};

const PortfolioContext = createContext<PortfolioContextType>({
  portfolio: defaultPortfolio,
  updatePortfolio: () => {},
  resetSection: () => {},
  saveToDatabase: async () => {}
});

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolio, setPortfolio] = useState<PortfolioData>(() => {
    // Try to load from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolioData');
      return saved ? JSON.parse(saved) : defaultPortfolio;
    }
    return defaultPortfolio;
  });

  const updatePortfolio = (section: keyof PortfolioData, data: any) => {
    setPortfolio(prev => {
      const updated = { ...prev, [section]: { ...prev[section], ...data } };
      localStorage.setItem('portfolioData', JSON.stringify(updated));
      return updated;
    });
  };

  const resetSection = (section: keyof PortfolioData) => {
    setPortfolio(prev => {
      const updated = { ...prev, [section]: defaultPortfolio[section] };
      localStorage.setItem('portfolioData', JSON.stringify(updated));
      return updated;
    });
  };

  const saveToDatabase = async () => {
    // Implement your API call here
    console.log('Saving to database:', portfolio);
    // Example:
    // await fetch('/api/portfolio', {
    //   method: 'POST',
    //   body: JSON.stringify(portfolio)
    // });
  };

  return (
    <PortfolioContext.Provider 
      value={{ portfolio, updatePortfolio, resetSection, saveToDatabase }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);