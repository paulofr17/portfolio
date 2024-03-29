import { useEffect, useRef, useState } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sections.current = Array.from(
      document.querySelectorAll("#home, #about, #projects, #contact"),
    ) as HTMLElement[];

    const handleScroll = () => {
      let maxVisibleSection = null;
      let maxVisibleArea = 0;

      sections.current.forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        const visibleArea = Math.min(window.innerHeight, bottom) - Math.max(0, top);
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          maxVisibleSection = section.id;
        }
      });

      setActiveSection(maxVisibleSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleScroll = () => {
  //   const pageYOffset = window.scrollY + 105;
  //   let newActiveSection = null;
  //   console.log(pageYOffset);
  //   sections.current.forEach((section) => {
  //     const sectionOffsetTop = section.offsetTop;
  //     const sectionHeight = section.offsetHeight;
  //     if (
  //       pageYOffset >= sectionOffsetTop &&
  //       pageYOffset < sectionOffsetTop + sectionHeight
  //     ) {
  //       newActiveSection = section.id;
  //     }
  //   });
  //   setActiveSection(newActiveSection);
  // };

  // useEffect(() => {
  //   sections.current = Array.from(
  //     document.querySelectorAll("#home, #about, #projects, #contact"),
  //   ) as HTMLElement[];
  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <nav className="sticky top-0 z-10 flex h-24 w-full items-center justify-between bg-white px-20 shadow-lg">
      <p className="font-bold">Paulo Ribeiro</p>
      <div className="flex gap-4 font-semibold">
        <a
          href="#home"
          className={`hover:text-red-500 ${activeSection === "home" && "text-red-500"}`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`hover:text-red-500 ${activeSection === "about" && "text-red-500"}`}
        >
          About
        </a>
        <a
          href="#projects"
          className={`hover:text-red-500 ${activeSection === "projects" && "text-red-500"}`}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`hover:text-red-500 ${activeSection === "contact" && "text-red-500"}`}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
