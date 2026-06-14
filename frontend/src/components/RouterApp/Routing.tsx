import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Hero from "../main/Hero";
import About from "../main/About";
import Contact from "../main/Contact";
import Header from "../Navbar/Header";
import Expertise from "../main/Expertise";

// Ek saf suthra Layout jahan Header hamesha rahy ga
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> 
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      // Baaki files ke liye placeholder, jab aap bna len gy to replace kr dena
      { path: "/expertise", element: <Expertise />},
      { path: "/projects", element: <div className="pt-32 text-center text-white">Projects Page (Coming Soon)</div> },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;