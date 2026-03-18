import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ContactCTA from "@/components/ContactCTA";
import { siteContent } from "@/content/siteContent";
import { scrollToSection } from "@/utils/scrollToSection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (sectionId: string) => (e: React.MouseEvent) => {
    if (!isHome) return;
    e.preventDefault();
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const linkClass = "text-xs font-sans uppercase tracking-[0.2em] text-foreground/80 hover:text-stratified transition-colors";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-background border-b border-border py-4" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={siteContent.brand.logoPath} alt={siteContent.brand.logoAlt} className="h-12 md:h-14 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {isHome ? (
            <>
              {siteContent.navLinks.map((link) => (
                <a
                  key={link.sectionId}
                  href={`#${link.sectionId}`}
                  onClick={handleLinkClick(link.sectionId)}
                  className={linkClass}
                >
                  {link.label}
                </a>
              ))}
              <Link to={siteContent.frameworkNavLink.path} className={linkClass}>
                {siteContent.frameworkNavLink.label}
              </Link>
            </>
          ) : (
            <Link to="/" className={linkClass}>
              Home
            </Link>
          )}
          <ContactCTA variant="board-advisory" size="sm" customText="Contact" sourceContext="Navbar" className="ml-2" />
        </div>

        <button
          type="button"
          className="md:hidden text-foreground p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-stratified focus-visible:ring-offset-2"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-custom py-6 flex flex-col gap-4">
            {isHome ? (
              <>
                {siteContent.navLinks.map((link) => (
                  <a
                    key={link.sectionId}
                    href={`#${link.sectionId}`}
                    onClick={handleLinkClick(link.sectionId)}
                    className={linkClass + " text-sm"}
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  to={siteContent.frameworkNavLink.path}
                  className={linkClass + " text-sm"}
                  onClick={() => setIsOpen(false)}
                >
                  {siteContent.frameworkNavLink.label}
                </Link>
              </>
            ) : (
              <Link to="/" className={linkClass + " text-sm"} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            )}
            <ContactCTA variant="board-advisory" customText="Contact" sourceContext="Navbar Mobile" className="w-fit mt-2" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
