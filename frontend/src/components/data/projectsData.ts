import orange1 from "../../assets/orange (1).png";
import orange2 from "../../assets/orange (2).png";
import orange3 from "../../assets/orange (3).png";

import ghost from "../../assets/ghostwriter.png";
import ghost1 from "../../assets/ghostwriter (1).png";
import bi from "../../assets/BI Inteligence.png";
import bi1 from "../../assets/BI Inteligence (1).png";
import outlookCrm1 from "../../assets/outlookCrm1.png"
import outlookCrm2 from "../../assets/outlookCrm2.png"
import outlookCrm3 from "../../assets/outlookCrm3.png"
import whats_app1 from "../../assets/what's app (1).png";
import whats_app2 from "../../assets/what's app (2).png";
import whats_app3 from "../../assets/what's app (3).png";
import whats_app4 from "../../assets/what's app (4).png";
import whats_app5 from "../../assets/what's app (5).png";
import researchIQ1 from "../../assets/researchIQ1.png";
import researchIQ2 from "../../assets/researchIQ2.png";
import researchIQ3 from "../../assets/researchIQ3.png";

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

{
  _id: "4",
  title: "AI Outlook CRM",
  tagline: "Intelligent Lead Extraction & Predictive Sales Scoring.",
  category: "Microsoft Office Add-ins",
  subType: "Microsoft Outlook Add-ins",
  images: [outlookCrm1, outlookCrm2, outlookCrm3],
  description:
    "An enterprise-grade Microsoft Outlook add-in that transforms incoming emails into actionable sales opportunities using advanced AI automation. Powered by GPT-4 and a FastAPI backend, the solution performs intelligent entity extraction to capture contact details, company information, job titles, and phone numbers directly from email conversations and signatures. A built-in predictive lead scoring engine evaluates prospect intent, budget signals, and engagement potential to automatically prioritize high-value opportunities. The platform synchronizes lead data in real time with MongoDB, creating a centralized CRM workflow that eliminates manual data entry and accelerates sales follow-up processes.",
  technologies: [
    "React.js",
    "Microsoft Office.js",
    "Microsoft Outlook Add-in",
    "FastAPI",
    "OpenAI GPT-4",
    "MongoDB",
    "Named Entity Recognition (NER)",
    "Predictive Lead Scoring",
    "REST APIs",
    "Automation",
  ],
  liveUrl: "#",
},

{
  _id: "5",
  title: "WhatsApp Campaign Hub",
  tagline: "Automated WhatsApp Messaging & Customer Engagement Platform.",
  category: "Google Add-ons",
  subType: "Google Sheets Add-ons",
  images: [whats_app1, whats_app2, whats_app3, whats_app4, whats_app5],
  description:
    "A powerful Google Sheets automation platform that enables businesses to launch personalized WhatsApp campaigns directly from spreadsheet data. Integrated with the WhatsApp Business API, the solution automates customer notifications, order updates, invoice delivery, and marketing outreach at scale. The system supports dynamic message templating with custom placeholders, allowing each recipient to receive highly personalized communication. A built-in delivery tracking engine provides real-time visibility into message statuses, including sent, delivered, and failed notifications. Designed for high-volume operations, the platform eliminates manual outreach workflows while maintaining privacy compliance and enterprise-grade reliability.",
  technologies: [
    "Google Apps Script",
    "Google Sheets API",
    "WhatsApp Business API",
    "Twilio API",
    "REST APIs",
    "Automation",
    "Message Personalization",
    "Campaign Management",
    "Status Tracking",
    "Workflow Automation",
  ],
  liveUrl: "#",
},

{
  _id: "6",
  title: "ResearchIQ Verifier",
  tagline: "AI-Powered Fact Verification & Smart Citation Assistant.",
  category: "Google Add-ons",
  subType: "Google Docs Add-ons",
  images: [researchIQ1, researchIQ2, researchIQ3],
  description:
    "An advanced Google Docs research assistant that combines artificial intelligence with live web intelligence to verify claims, validate facts, and generate professional citations without leaving the document workspace. Built with a modern React and Material UI interface, the platform integrates GPT-4o and real-time search capabilities to analyze highlighted content, cross-reference multiple sources, and provide instant fact verification. The system automatically generates properly formatted citations while delivering source credibility insights through a built-in confidence scoring framework. Designed for researchers, academics, journalists, and content teams, it significantly accelerates the research workflow while improving content accuracy and trustworthiness.",
  technologies: [
    "Google Apps Script",
    "Google Docs API",
    "React.js",
    "Material UI",
    "OpenAI GPT-4o",
    "Google Search API",
    "Fact Verification",
    "Citation Generation",
    "Prompt Engineering",
    "Real-Time Research",
    "Automation",
  ],
  liveUrl: "#",
},

];
