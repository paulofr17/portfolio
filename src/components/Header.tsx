import { useSectionScroll } from "@hooks/useSectionScroll";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const { sections, scrollToSection } = useSectionScroll();

  useEffect(() => {
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
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSidebarLinkClick = useCallback(
    (section: string) => () => {
      setSideBarOpen(false);
      scrollToSection(section)();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <header className="sticky top-0 z-10 flex h-24 w-full max-w-[1920px] items-center justify-between bg-white px-4 shadow-sm sm:px-20">
      <h1 className="text-lg font-bold">Paulo Ribeiro</h1>
      <ul className="hidden gap-4 text-sm font-semibold sm:flex sm:text-base">
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
      <button onClick={() => setSideBarOpen((prev) => !prev)} className="block sm:hidden">
        <Menu className="h-6 w-6" />
      </button>
      {sideBarOpen && (
        <div className="fixed inset-0 z-10 bg-black/50" onClick={() => setSideBarOpen(false)}></div>
      )}
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 transform bg-white transition-transform duration-300 ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold">Menu</h1>
          <button onClick={() => setSideBarOpen(false)} className="hover:opacity-50">
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="space-y-4 px-4 pt-4 font-rubik">
          <li
            className={`cursor-pointer hover:text-red-500 ${activeSection === "about" && "text-red-500"}`}
            onClick={handleSidebarLinkClick("about")}
          >
            About
          </li>
          <li
            className={`cursor-pointer hover:text-red-500 ${activeSection === "experience" && "text-red-500"}`}
            onClick={handleSidebarLinkClick("experience")}
          >
            Experience
          </li>
          <li
            className={`cursor-pointer hover:text-red-500 ${activeSection === "projects" && "text-red-500"}`}
            onClick={handleSidebarLinkClick("projects")}
          >
            Projects
          </li>
          <li
            className={`cursor-pointer hover:text-red-500 ${activeSection === "contact" && "text-red-500"}`}
            onClick={handleSidebarLinkClick("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
}
