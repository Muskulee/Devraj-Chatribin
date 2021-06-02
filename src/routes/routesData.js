import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";

import {
  HomeRounded,
  InfoRounded,
  CodeRounded,
  HelpRounded,
} from "@material-ui/icons";

const routesData = [
  {
    pageName: "Home",
    pageURL: "/home",
    showOnHeader: true,
    component: <HomePage />,
    icon: <HomeRounded />,
  },
  {
    pageName: "Projects",
    pageURL: "/projects",
    showOnHeader: true,
    component: <ProjectsPage />,
    icon: <CodeRounded />,
  },
];

export default routesData;
