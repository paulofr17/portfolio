import { useCallback, useEffect, useRef, useState } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef<HTMLElement[]>([]);

  const scrollToSection = useCallback(
    (sectionName: string) => () => {
      const section = sections.current.find((section) => section.id === sectionName);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    },
    [],
  );

  useEffect(() => {
    sections.current = Array.from(
      document.querySelectorAll("#about, #experience, #projects, #contact"),
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
    <header className="sticky top-0 z-10 flex h-24 w-full items-center justify-between bg-white px-20 shadow-sm">
      <h1 className="text-lg font-bold">Paulo Ribeiro</h1>
      <ul className="flex gap-4 font-semibold">
        <li
          className={`cursor-pointer hover:text-red-500 ${activeSection === "about" && "text-red-500"}`}
          onClick={scrollToSection("about")}
        >
          About
        </li>
        <li
          className={`cursor-pointer hover:text-red-500 ${activeSection === "experience" && "text-red-500"}`}
          onClick={scrollToSection("experience")}
        >
          Experience
        </li>
        <li
          className={`cursor-pointer hover:text-red-500 ${activeSection === "projects" && "text-red-500"}`}
          onClick={scrollToSection("projects")}
        >
          Projects
        </li>
        <li
          className={`cursor-pointer hover:text-red-500 ${activeSection === "contact" && "text-red-500"}`}
          onClick={scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </header>
  );
}
