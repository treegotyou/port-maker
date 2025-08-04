import React from 'react';
import type { PortfolioData } from '../types/portfolio';

const ProfessionalTemplate: React.FC<{ portfolio: PortfolioData }> = ({ portfolio }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      {/* Hero Section */}
      <section style={{ 
        textAlign: 'center', 
        padding: '4rem 0',
        borderBottom: `1px solid ${portfolio.uiSettings.isDarkMode ? '#333' : '#eee'}`
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          color: portfolio.uiSettings.primaryColor,
          marginBottom: '1rem'
        }}>
          {portfolio.hero.title}
        </h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.8 }}>
          {portfolio.hero.subtitle}
        </p>
        {portfolio.hero.imageUrl && (
          <img 
            src={portfolio.hero.imageUrl} 
            alt="Hero" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto',
              marginTop: '2rem',
              borderRadius: '8px'
            }} 
          />
        )}
        <button style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: portfolio.uiSettings.primaryColor,
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          {portfolio.hero.ctaText}
        </button>
      </section>

      {/* About Section */}
      <section style={{ 
        padding: '4rem 0',
        display: 'flex',
        flexDirection: 'row',
        gap: '3rem',
        borderBottom: `1px solid ${portfolio.uiSettings.isDarkMode ? '#333' : '#eee'}`
      }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ 
            fontSize: '2rem',
            color: portfolio.uiSettings.primaryColor,
            marginBottom: '1.5rem'
          }}>
            About Me
          </h2>
          <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
            {portfolio.about.content}
          </p>
        </div>
        {portfolio.about.imageUrl && (
          <div style={{ flex: 1 }}>
            <img 
              src={portfolio.about.imageUrl} 
              alt="Profile" 
              style={{ 
                width: '100%', 
                maxWidth: '400px',
                borderRadius: '8px'
              }} 
            />
          </div>
        )}
      </section>

      {/* Add other sections similarly */}
    </div>
  );
};

export default ProfessionalTemplate;