import Task_Manager from "@assets/task_manager.png";

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  liveView: string;
};

export const projectsPortfolio: Project[] = [
  {
    name: "Task Manager",
    description:
      `Task Manager is an app designed to help users organize, prioritize, and accomplish their
      tasks efficiently. With its intuitive interface and comprehensive suite of features, it
      simplifies task management, boost productivity, and empower users to achieve their goals
      effectively.`,
    technologies: ["Next", "React", "Tailwind", "Prisma", "MongoDB"],
    image: Task_Manager,
    github: "https://github.com/paulofr17/task-manager/",
    liveView: "https://task-manager-paulofr17.vercel.app/"
  },
];