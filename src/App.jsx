// rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Navbar from "./components/Navbar";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

// MainLayout
import MainLayout from "./layouts/MainLayouts";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
export default App;
