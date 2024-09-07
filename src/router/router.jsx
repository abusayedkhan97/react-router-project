import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/layouts";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import SingleBlog from "../pages/Blog/SingleBlog";
import User from "../pages/User/User";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/:blogId",
        element: <SingleBlog />
      },
      {
        path: "/user",
        element: <User />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
  },
]);

export default router;
