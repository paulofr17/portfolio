import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className="bg-zinc-800 text-white">
      <div className="mx-auto max-w-[800px] py-4 sm:py-6">
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-base font-semibold sm:text-lg">Contact Me</h3>
              <nav className="mt-2 flex gap-3">
                <a href="mailto:paulofr17@gmail.com" className="text-white hover:text-gray-300">
                  <MdOutlineEmail size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/paulo-ribeiro17/"
                  target="_blank"
                  className="text-white hover:text-gray-300"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="https://github.com/paulofr17/"
                  target="_blank"
                  className="text-white hover:text-gray-300"
                >
                  <FaGithub size={22} />
                </a>
              </nav>
            </div>
            <div className="mt-auto text-sm">
              <p>&copy; {new Date().getFullYear()} Paulo Ribeiro</p>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold sm:text-lg">Quick Links</h3>
            <ul className="space-y-1 font-rubik text-sm sm:text-base">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
