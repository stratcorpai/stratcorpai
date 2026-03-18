import { siteContent, type GovernancePost } from "@/content/siteContent";

export type BlogPost = GovernancePost;

export const getBlogPosts = (): BlogPost[] => siteContent.governancePosts;

export const openPDF = (pdfUrl?: string) => {
  if (!pdfUrl) return;
  window.open(pdfUrl, "_blank");
};

export const downloadPDF = (pdfUrl?: string, filename = "brief.pdf") => {
  if (!pdfUrl) return;
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

