import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BlogList from "./Components/BlogList/BlogList";
import Layout from "./Components/Layout/Layout";
import MainSection from "./Components/MainSection/MainSection";
import DataContextProvider from "./context/dataContextProvider";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Privacy from "./Pages/Privacy/Privacy";
import Terms from "./Pages/Terms/Terms";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "blog",
          element: <Blog />,
          children: [
            {
              index: true,
              element: (
                <>
                  <MainSection
                    sectionLabel="مدونتنا"
                    heading="استكشف مقالاتنا"
                    paragraph="اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث"
                  />
                  <BlogList />
                </>
              ),
            },
            {
              path: ":slug",
              element: <BlogDetails />,
            },
          ],
        },
        { path: "/about", element: <AboutUs /> },
        { path: "/terms", element: <Terms /> },
        { path: "/privacy", element: <Privacy /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <DataContextProvider>
        <RouterProvider router={routes} />
      </DataContextProvider>
    </>
  );
}

export default App;
