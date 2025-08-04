export interface PortfolioData {
  hero: {
    title: string;
    subtitle: string;
    imageUrl: string;
    ctaText: string;
    ctaLink: string;
  };
  about: {
    content: string;
    imageUrl: string;
  };
  skills: {
    items: {
      name: string;
      level: number;
      icon?: string;
    }[];
  };
  portfolio: {
    projects: {
      title: string;
      description: string;
      imageUrl: string;
      tags: string[];
      link?: string;
    }[];
  };
  services: {
    items: {
      title: string;
      description: string;
      icon?: string;
    }[];
  };
  testimonials: {
    items: {
      quote: string;
      author: string;
      position: string;
      company?: string;
    }[];
  };
  resume: {
    fileUrl: string;
    education: {
      degree: string;
      institution: string;
      year: string;
    }[];
    experience: {
      position: string;
      company: string;
      duration: string;
      description: string;
    }[];
  };
  contact: {
    email: string;
    phone?: string;
    address?: string;
    socialLinks: {
      platform: string;
      url: string;
      icon?: string;
    }[];
  };
  uiSettings: {
    template: string;
    primaryColor: string;
    fontFamily: string;
    isDarkMode: boolean;
  };
}