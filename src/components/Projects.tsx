import { Project } from "@components/Project";
import { projectsPortfolio } from "@models/types";

export function Projects() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-2">
        <h1 className="text-center text-4xl font-bold">Projects</h1>
        <h2 className="text-center font-rubik text-lg font-semibold text-red-500">
          Portfolio of personal projects
        </h2>
        <div className="flex flex-col gap-10">
          {projectsPortfolio.map((project, index) => (
            <Project key={index} index={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
