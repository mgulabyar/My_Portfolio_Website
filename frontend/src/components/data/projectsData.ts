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
    tagline: "Intuit QuickBooks Automated Sheet Integration.",
    category: "Google Add-ons",
    subType: "Google Sheet Add-ons",
    images: [orange1, orange2, orange3],
    description: "Full description for Orange Ledger...",
    technologies: ["Google Apps Script", "QuickBooks API", "OAuth 2.0"],
    liveUrl: "#"
  },
  {
    _id: "2",
    title: "GhostWriter Professional",
    tagline: "AI-Powered Document Assistance.",
    category: "Google Add-ons",
    subType: "Google Docs Add-ons",
    images: [ghost, ghost1],
    description: "Full description for GhostWriter...",
    technologies: ["React.js", "OpenAI API", "Material UI"],
    liveUrl: "#"
  }
];