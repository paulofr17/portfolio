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
    liveView: "https://task--manager.vercel.app/"
  },
  {
    name: "Sneakers Store",
    description:
      `Nisi est ullamco irure laboris consectetur laborum do nisi aute id sunt laboris.
      Officia esse ad non velit non minim ad pariatur ullamco dolor cupidatat et incididunt. Dolor et adipisicing est voluptate excepteur dolor ut. 
      Consequat officia ipsum aliquip do exercitation culpa ea nulla aute anim. Aliquip ipsum qui sunt proident id elit proident.`,
    technologies: ["Next", "React", "Tailwind", "Prisma", "NodeJS", "PostgreSQL"],
    image: Task_Manager,
    github: "https://github.com/paulofr17/task-manager/",
    liveView: "https://sneakers--store.vercel.app/"
  },
  {
    name: "Sneakers Store",
    description:
      `Nisi est ullamco irure laboris consectetur laborum do nisi aute id sunt laboris.
      Officia esse ad non velit non minim ad pariatur ullamco dolor cupidatat et incididunt. Dolor et adipisicing est voluptate excepteur dolor ut. 
      Consequat officia ipsum aliquip do exercitation culpa ea nulla aute anim. Aliquip ipsum qui sunt proident id elit proident.`,
    technologies: ["Angular", "Tailwind", "Prisma", "NodeJS", "PostgreSQL"],
    image: Task_Manager,
    github: "https://github.com/paulofr17/task-manager/",
    liveView: "https://sneakersstore.vercel.app/"
  },
  {
    name: "Spickles",
    description:
      `Nisi est ullamco irure laboris consectetur laborum do nisi aute id sunt laboris.
      Officia esse ad non velit non minim ad pariatur ullamco dolor cupidatat et incididunt. Dolor et adipisicing est voluptate excepteur dolor ut. 
      Consequat officia ipsum aliquip do exercitation culpa ea nulla aute anim. Aliquip ipsum qui sunt proident id elit proident.`,
    technologies: ["React", "AntDesign"],
    image: Task_Manager,
    github: "",
    liveView: "https://spickles.vercel.app/"
  },
];