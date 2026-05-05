import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getBlogPosts, openPDF } from "@/utils/blogUtils";
import { siteContent } from "@/content/siteContent";
import ContactCTA from "@/components/ContactCTA";
import AnimatedSection from "@/components/ui/AnimatedSection";

const BlogSection = () => {
  const blogPosts = getBlogPosts();
  const featuredPost = blogPosts.find((post) => post.isFeatured);
  const pillarPosts = blogPosts.filter((post) => !post.isFeatured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section id="ai-governance" className="section-padding bg-background border-b border-border">
      <div className="container-custom">
        <AnimatedSection className="max-w-3xl mb-16">
          <p className="text-eyebrow mb-4">Proof engine</p>
          <h2 className="font-heading text-stratified mb-6">{siteContent.governance.title}</h2>
          <p className="text-body-lg text-muted-foreground">
            {siteContent.governance.subtitle}. {siteContent.governance.description}
          </p>
        </AnimatedSection>

        {featuredPost && (
          <AnimatedSection delay={0.06} className="mb-16">
            <article className="border border-border bg-muted/20 p-8 md:p-10">
              <p className="text-eyebrow mb-4">{siteContent.governance.featuredLabel}</p>
              <h3 className="font-heading text-2xl md:text-3xl text-stratified mb-4">{featuredPost.title}</h3>
              <p className="text-caption mb-4">
                {formatDate(featuredPost.publishDate)} · {featuredPost.readTime}
              </p>
              <p className="text-body-lg text-muted-foreground mb-6 max-w-3xl">{featuredPost.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags?.map((tag, index) => (
                  <span key={index} className="text-xs font-sans uppercase tracking-wider text-stratified/90">
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                size="lg"
                disabled={!featuredPost.pdfUrl}
                className="btn-primary disabled:opacity-70"
                onClick={() => openPDF(featuredPost.pdfUrl)}
              >
                {featuredPost.pdfUrl ? siteContent.governance.featuredButtonLabel : "Available on request"}
              </Button>
            </article>
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.08} className="mb-16">
          <h4 className="font-heading text-stratified mb-8">{siteContent.governance.pillarsTitle}</h4>
          <div className="border-t border-border">
            {pillarPosts.map((post) => (
              <article key={post.id} className="border-b border-border py-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h5 className="font-heading text-stratified mb-2">{post.title}</h5>
                    <p className="text-caption mb-3">
                      {formatDate(post.publishDate)} · {post.readTime}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">{post.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    disabled={!post.pdfUrl}
                    className="btn-secondary w-fit disabled:opacity-70"
                    onClick={() => openPDF(post.pdfUrl)}
                  >
                    {post.pdfUrl ? siteContent.governance.articleButtonLabel : "Available on request"}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-16">
          <div className="border-t border-border pt-8">
            <p className="text-body-lg text-muted-foreground mb-4">{siteContent.governance.frameworkCta.description}</p>
            <Button size="lg" className="btn-primary" asChild>
              <Link to={siteContent.governance.frameworkCta.path}>{siteContent.governance.frameworkCta.label}</Link>
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.12}>
          <div className="border border-border bg-muted/20 p-8 md:p-10">
            <h4 className="font-heading text-stratified mb-4">{siteContent.governance.partnership.title}</h4>
            <p className="text-body-lg text-muted-foreground mb-6">{siteContent.governance.partnership.description}</p>
            <ul className="space-y-2 mb-6">
              {siteContent.governance.partnership.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground/90">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-stratified" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-semibold text-stratified mb-4">{siteContent.governance.partnership.cardTitle}</p>
            <p className="text-caption mb-6">{siteContent.governance.partnership.cardDescription}</p>
            <ContactCTA
              variant="partnership"
              size="lg"
              customText={siteContent.governance.partnership.buttonLabel}
              sourceContext="Research Collaboration CTA"
              className="w-fit"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogSection;
