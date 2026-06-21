import orange1 from "../../assets/orange (1).png";
import orange2 from "../../assets/orange (2).png";
import orange3 from "../../assets/orange (3).png";

import ghost from "../../assets/ghostwriter.png";
import ghost1 from "../../assets/ghostwriter (1).png";
import bi from "../../assets/BI Inteligence.png";
import bi1 from "../../assets/BI Inteligence (1).png";
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
    description:
      "A high-performance Google Sheets add-on that automates real-time financial data synchronization with QuickBooks via secure OAuth 2.0. It streamlines ledger management and generates audit-ready reports, eliminating manual data entry for accounting and finance teams.",
    technologies: [
      "Google Apps Script",
      "QuickBooks API",
      "OAuth 2.0",
      "RESTful APIs",
      "Automation",
    ],
    liveUrl: "#",
  },
  {
    _id: "2",
    title: "GhostWriter Professional",
    tagline: "AI-Powered Google Docs Writing Assistant.",
    category: "Google Add-ons",
    subType: "Google Docs Add-ons",
    images: [ghost, ghost1],
    description:
      "A smart Google Docs extension powered by OpenAI's GPT-4o. It features a custom React-based sidebar for instant content rewriting, tone adjustment, and multi-language support, complete with a persistent history management system for professional content creators.",
    technologies: [
      "OpenAI API",
      "React.js",
      "Material UI",
      "Google Apps Script",
      "Prompt Engineering",
    ],
    liveUrl: "#",
  },
  {
  _id: "3",
  title: "Strategic BI Commander",
  tagline: "AI-Driven Executive Analytics & Business Intelligence Dashboard.",
  category: "Google Add-ons",
  subType: "Google Sheets Add-ons",
  images: [bi, bi1],
  description:
    "A powerful Google Sheets business intelligence add-on designed for executives, analysts, and operations teams. The platform automates strategic reporting by generating structured analytics dashboards, trend analysis, performance insights, predictive forecasting datasets, recovery planning reports, and marketing intelligence sheets. Built with a modern React and Material UI interface, it streamlines decision-making workflows by transforming raw spreadsheet data into executive-ready business reports with a single click.",
  technologies: [
    "Google Apps Script",
    "React.js",
    "Material UI",
    "Google Sheets API",
    "Business Intelligence",
    "Predictive Analytics",
    "Data Visualization",
    "Automation",
  ],
  liveUrl: "#",
},
];
