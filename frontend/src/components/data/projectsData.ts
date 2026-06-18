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
    tagline: "Enterprise-Grade QuickBooks & Google Sheets Automation.",
    category: "Google Add-ons",
    subType: "Google Sheet Add-ons",
    images: [orange1, orange2, orange3],
    description: "Orange Ledger is a high-performance automation bridge designed to synchronize financial data between Intuit QuickBooks and Google Sheets natively. It eliminates manual data entry by utilizing secure OAuth 2.0 protocols to fetch real-time transaction ledgers, multi-currency reports, and profit-and-loss statements. The tool features custom automated mapping, background synchronization, and financial formatting, allowing accounting teams to generate audit-ready reports with a single click.",
    technologies: ["Google Apps Script", "QuickBooks Online API", "OAuth 2.0 Authentication", "RESTful APIs", "JSON Data Parsing", "Financial Automation"],
    liveUrl: "#"
  },
  {
    _id: "2",
    title: "GhostWriter Professional",
    tagline: "AI-Powered Document Co-Pilot & Generative Writing Assistant.",
    category: "Google Add-ons",
    subType: "Google Docs Add-ons",
    images: [ghost, ghost1],
    description: "GhostWriter Professional is a cutting-edge AI extension for Google Docs that integrates OpenAI's GPT-4o engine to revolutionize content creation. Built with a sophisticated React-based sidebar, it offers features like linguistic tone adjustment (Professional, Technical, Creative), real-time content rewriting, and multi-language translation. It includes a persistent history management system for tracking AI interactions and ensures all generated content is automatically injected into the document with professional styling and heading hierarchy.",
    technologies: ["OpenAI GPT-4o API", "React.js", "Material UI (MUI)", "Google Apps Script", "Prompt Engineering", "Persistence API (UserProps)"],
    liveUrl: "#"
  }
];