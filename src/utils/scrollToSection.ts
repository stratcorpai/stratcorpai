export const scrollToSection = (sectionId: string) => {
  const target = document.getElementById(sectionId);
  if (!target) return false;

  const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
  const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;

  window.scrollTo({
    top,
    behavior: "smooth",
  });

  return true;
};

