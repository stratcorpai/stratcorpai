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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLinkClick = (sectionId: string) => (e: React.MouseEvent) => {
    if (!isHome) return;
    e.preventDefault();
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const linkBase =
    "font-sans uppercase tracking-[0.15em] text-foreground/70 hover:text-stratified transition-colors duration-200";
  const linkDesktop = `${linkBase} text-[0.65rem] xl:text-[0.7rem] 2xl:text-[0.75rem]`;
  const linkMobile = `${linkBase} text-[0.8rem] py-1`;

  // Page-level route links — always visible
  const pageLinks = [
    { label: siteContent.warRoomNavLink.label, path: siteContent.warRoomNavLink.path },
    { label: siteContent.frameworkNavLink.label, path: siteContent.frameworkNavLink.path },
    { label: siteContent.speakingNavLink.label, path: siteContent.speakingNavLink.path },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/80 py-2"
          : "bg-background/80 backdrop-blur-sm py-3 sm:py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0" onClick={() => setIsOpen(false)}>
          <img
            src={siteContent.brand.logoPath}
            alt={siteContent.brand.logoAlt}
            className="h-10 sm:h-12 md:h-14 lg:h-16 2xl:h-20 w-auto"
            style={{ objectFit: 'contain', objectPosition: 'left center', maxWidth: '100%' }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7">
          {isHome &&
            siteContent.navLinks.map((link) => (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                onClick={handleLinkClick(link.sectionId)}
                className={linkDesktop}
              >
                {link.label}
              </a>
            ))}

          {!isHome && (
            <Link to="/" className={linkDesktop}>
              Home
            </Link>
          )}

          {pageLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${linkDesktop} ${isActive(link.path) ? "text-stratified font-semibold" : ""}`}
            >
              {link.label}
            </Link>
          ))}

          <div className="ml-1">
            <ContactCTA
              variant="board-advisory"
              size="sm"
              customText="Contact"
              sourceContext="Navbar"
            />
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden text-foreground p-1.5 -mr-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-stratified"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom py-5 flex flex-col gap-3 border-t border-border/60">
          {isHome ? (
            <>
              {siteContent.navLinks.map((link) => (
                <a
                  key={link.sectionId}
                  href={`#${link.sectionId}`}
                  onClick={handleLinkClick(link.sectionId)}
                  className={linkMobile}
                >
                  {link.label}
                </a>
              ))}
            </>
          ) : (
            <Link to="/" className={linkMobile} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          )}

          <hr className="border-border/40 my-1" />

          {pageLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${linkMobile} ${isActive(link.path) ? "text-stratified font-semibold" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-2">
            <ContactCTA
              variant="board-advisory"
              customText="Contact"
              sourceContext="Navbar Mobile"
              className="w-full justify-center"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
