
import { motion } from 'framer-motion';

interface NavbarLinksProps {
  className?: string;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const NavbarLinks = ({ className = '', isMobile = false, onLinkClick }: NavbarLinksProps) => {
  const links = [
    { href: '#investment-thesis', label: 'Our Approach' },
    { href: '#team', label: 'Leadership' },
    { href: '#board-service', label: 'Services' },
    { href: '/assessment', label: 'Assessment', isExternal: true },
  ];

  const handleLinkClick = (href: string, isExternal?: boolean) => {
    if (isExternal) {
      // Handle external navigation
      window.location.href = href;
    } else {
      // Handle anchor navigation
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const linkBaseClasses = isMobile
    ? "block py-3 px-4 text-lg font-semibold text-gray-800 hover:text-stratified rounded-xl hover:bg-stratified/5 transition-all duration-300 focus:ring-4 focus:ring-stratified/20 focus:outline-none focus:bg-stratified/5"
    : "relative py-2 px-4 font-semibold text-gray-800 hover:text-stratified transition-all duration-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-stratified/20 focus:outline-none group";

  return (
    <div className={className}>
      {links.map((link, index) => (
        <motion.button
          key={link.href}
          onClick={() => handleLinkClick(link.href, link.isExternal)}
          className={linkBaseClasses}
          initial={isMobile ? { opacity: 0, x: -20 } : {}}
          animate={isMobile ? { opacity: 1, x: 0 } : {}}
          transition={isMobile ? { delay: index * 0.1 } : {}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.label}
          {!isMobile && (
            <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-stratified transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default NavbarLinks;
