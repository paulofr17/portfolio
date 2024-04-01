import task_manager from "@assets/task_manager.png";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

export function Projects() {
  return (
    <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-2">
      <h1 className="text-center text-4xl font-bold">Projects</h1>
      <h2 className="text-center font-rubik text-lg font-semibold text-red-500">
        Portfolio of personal projects
      </h2>
      <div className="mt-8 flex flex-col-reverse gap-6 md:flex-row">
        <div className="flex-1">
          <img src={task_manager} className="w-full rounded-lg" />
        </div>
        <div className="mx-auto flex w-full max-w-96 flex-col gap-4 text-pretty text-center md:justify-evenly">
          <h3 className="text-xl font-semibold">Task Manager</h3>
          <p className="pb-1 font-rubik text-sm text-gray-700">
            Task Manager is an app designed to help users organize, prioritize, and accomplish their
            tasks efficiently. With its intuitive interface and comprehensive suite of features, it
            simplifies task management, boost productivity, and empower users to achieve their goals
            effectively.
          </p>
          <div className="flex justify-center gap-4 text-sm font-semibold">
            <span>Next</span>
            <span>React</span>
            <span>Tailwind</span>
            <span>Prisma</span>
            <span>MongoDB</span>
          </div>
          <div className="flex justify-center gap-3">
            <a
              target="_blank"
              href="https://github.com/paulofr17/task-manager/"
              className="flex items-center gap-1 rounded-md border border-black/70 px-3 py-2 font-rubik text-sm font-medium transition-colors duration-300 hover:bg-black hover:text-white"
            >
              <span>Code</span>
              <AiFillGithub size={22} className="" />
            </a>
            <a
              target="_blank"
              href="https://task-manager-paulofr17.vercel.app/"
              className="flex items-center gap-[6px] rounded-md bg-red-500 px-3 py-2 font-rubik text-sm font-medium text-white transition-colors duration-300 hover:bg-red-400"
            >
              <span>Live View</span>
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
