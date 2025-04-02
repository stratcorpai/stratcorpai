
import { Link } from "react-router-dom";

interface NavbarLinksProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

const NavbarLinks = ({ isMobile = false, closeMenu }: NavbarLinksProps) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith('/')) return; // For regular page links
    
    e.preventDefault();

    // If we're on the home page
    if (window.location.pathname === '/') {
      const element = document.getElementById(targetId);
      
      if (element) {
        // Calculate offset for the header
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        if (isMobile && closeMenu) {
          closeMenu();
        }
      }
    } else {
      // If we're on another page, navigate to home first
      window.location.href = `/#${targetId}`;
    }
  };

  const linkClass = isMobile 
    ? "block w-full py-2 text-lg hover:text-stratified transition-colors"
    : "link-underline px-3 py-2 hover:text-stratified text-gray-700 transition-colors";

  return (
    <>
      <a href="#investment-thesis" className={linkClass} onClick={(e) => handleLinkClick(e, "investment-thesis")}>
        Investment Thesis
      </a>
      <a href="#board-service" className={linkClass} onClick={(e) => handleLinkClick(e, "board-service")}>
        Board Service
      </a>
      <a href="#team" className={linkClass} onClick={(e) => handleLinkClick(e, "team")}>
        Team
      </a>
      <a href="#stratcorp-ai" className={linkClass} onClick={(e) => handleLinkClick(e, "stratcorp-ai")}>
        StratCorp.AI
      </a>
    </>
  );
};

export default NavbarLinks;
