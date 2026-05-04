export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};
export type Props = {
  project: Project;
  index: number;
};
export const projects: Project[] = [
  {
    title: "Movies App",
    description:
      "A modern movie app that fetches and displays films from an API with a clean and interactive UI.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TMDB API"],
    link: "https://github.com/HossamMohammed2000/movies_app",
  },
  {
    title: "Fresh Cart",
    description:
      "A responsive e-commerce UI for browsing and managing products with a smooth user experience.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/HossamMohammed2000",
  },
  {
  title: "The_Prayer",
    description:
      "A web app that displays accurate Islamic prayer times based on user location.",
    tech: ["React", "JavaScript", "CSS", "Prayer Times API"],
    link: "https://github.com/HossamMohammed2000/The-Prayer",
  },
  {
    title: "Admin Dashboard",
    description:
      "A clean dashboard interface for managing data with organized layout and reusable components.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/HossamMohammed2000",
  },
  {
    title: "Task Flow",
    description:
      "A simple task management app to organize daily tasks with an intuitive and minimal UI.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/HossamMohammed2000",
  },
];