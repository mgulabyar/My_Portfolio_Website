import orange1 from '../../assets/orange (1).png';
import orange2 from '../../assets/orange (2).png';
import orange3 from '../../assets/orange (3).png';

import ghost from '../../assets/ghostwriter.png';
import ghost1 from '../../assets/ghostwriter (1).png';

export interface Project {
  _id: string;
  title: string;
  tagline: string;
  description: string;
  category: string; 
  subType: string; 
  images: string[];
  technologies: string[];
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    _id: "1",
    title: "Orange Ledger",
    tagline: "Automated QuickBooks & Google Sheets Sync.",
    category: "Google Add-ons",
    subType: "Google Sheet Add-ons",
    images: [orange1, orange2, orange3],
    description: "A high-performance Google Sheets add-on that automates real-time financial data synchronization with QuickBooks via secure OAuth 2.0. It streamlines ledger management and generates audit-ready reports, eliminating manual data entry for accounting and finance teams.",
    technologies: ["Google Apps Script", "QuickBooks API", "OAuth 2.0", "RESTful APIs", "Automation"],
    liveUrl: "#"
  },
  {
    _id: "2",
    title: "GhostWriter Professional",
    tagline: "AI-Powered Google Docs Writing Assistant.",
    category: "Google Add-ons",
    subType: "Google Docs Add-ons",
    images: [ghost, ghost1],
    description: "A smart Google Docs extension powered by OpenAI's GPT-4o. It features a custom React-based sidebar for instant content rewriting, tone adjustment, and multi-language support, complete with a persistent history management system for professional content creators.",
    technologies: ["OpenAI API", "React.js", "Material UI", "Google Apps Script", "Prompt Engineering"],
    liveUrl: "#"
  }
];