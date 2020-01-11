import { Home, Resume } from "containers";


const routes = [
  {
    path: "/home",
    name: "HOME",
    component: Home,
    home: true
  },
  {
    path: "/resume",
    name: "RESUME",
    component: Resume
  }
];

export default routes;
