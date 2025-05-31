
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  pdfUrl: string;
  publishDate: string;
  readTime: string;
  tags?: string[];
  isFeatured?: boolean;
}

export const getBlogPosts = (): BlogPost[] => {
  return [
    {
      id: 1,
      title: "The Next AI Imperative",
      description: "Strategic insights into AI transformation and the imperative for organizational readiness in the age of artificial intelligence.",
      pdfUrl: "/blog/TheNextAIImperative, A.Bulisache, F.Chima, 04.25.pdf",
      publishDate: "2025-04-25",
      readTime: "15 min read",
      tags: ["AI Strategy", "Digital Transformation", "Leadership"],
      isFeatured: true
    },
    {
      id: 2,
      title: "The Next AI Imperative: Capacity",
      description: "Building organizational capacity for AI adoption and scaling intelligent systems across enterprise operations.",
      pdfUrl: "/blog/TheNextAIImperative- Capacity, A.Bulisache, F.Chima, 05.25.pdf",
      publishDate: "2025-05-25",
      readTime: "12 min read",
      tags: ["Capacity Building", "AI Implementation", "Organizational Design"]
    },
    {
      id: 3,
      title: "The Next AI Imperative: Geopolitics",
      description: "Navigating the geopolitical landscape of AI development and the strategic implications for global business operations.",
      pdfUrl: "/blog/TheNextAIImperative-Geopolitics, A.Bulisache, F.Chima, 05.25.pdf",
      publishDate: "2025-05-25",
      readTime: "18 min read",
      tags: ["Geopolitics", "AI Policy", "Global Strategy"]
    },
    {
      id: 4,
      title: "The Next AI Imperative: Sustainability at Scale",
      description: "Integrating sustainability principles with AI-driven transformation to achieve scalable environmental and business impact.",
      pdfUrl: "/blog/TheNextAIImperative- Sustainability at Scale, A.Bulisache, F.Chima 05.25.pdf",
      publishDate: "2025-05-25",
      readTime: "14 min read",
      tags: ["Sustainability", "ESG", "Scale", "Environmental Impact"]
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
