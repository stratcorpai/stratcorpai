
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  pdfUrl: string;
  publishDate: string;
  readTime: string;
  tags?: string[];
}

export const getBlogPosts = (): BlogPost[] => {
  // This function will be updated to read from the blog folder
  // For now, returning placeholder data that matches the structure
  return [
    {
      id: 1,
      title: "AI Risk Management Framework for Modern Boards",
      description: "A comprehensive guide to establishing AI governance frameworks that enable strategic oversight while fostering innovation.",
      pdfUrl: "/blog/ai-risk-management.pdf",
      publishDate: "2024-01-15",
      readTime: "12 min read",
      tags: ["AI Governance", "Risk Management", "Board Strategy"]
    },
    {
      id: 2,
      title: "From Reactive to Proactive: AI Governance Strategies",
      description: "Transforming board oversight from traditional reactive models to forward-thinking AI governance approaches.",
      pdfUrl: "/blog/proactive-ai-governance.pdf",
      publishDate: "2024-02-08",
      readTime: "8 min read",
      tags: ["Strategy", "Proactive Governance", "Digital Transformation"]
    },
    {
      id: 3,
      title: "Board Readiness for AI Transformation",
      description: "Essential frameworks and assessment tools for boards navigating AI adoption and digital transformation.",
      pdfUrl: "/blog/board-ai-readiness.pdf",
      publishDate: "2024-02-22",
      readTime: "15 min read",
      tags: ["Board Development", "AI Readiness", "Assessment Tools"]
    }
  ];
};

export const openPDF = (pdfUrl: string) => {
  window.open(pdfUrl, '_blank');
};

export const downloadPDF = (pdfUrl: string, filename: string) => {
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
