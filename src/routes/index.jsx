import { Home, Resume, Project } from "containers";

const routes = [
  {
    path: "/home",
    name: "HOME",
    component: Home,
    home: true,
  },
  {
    path: "/resume",
    name: "RESUME",
    component: Resume,
  },
  {
    path: "/projects",
    name: "PROJECTS",
    component: Project,
  },
];

export default routes;
