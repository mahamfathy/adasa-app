import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BlogList from "./Components/BlogList/BlogList";
import Layout from "./Components/Layout/Layout";
import MainSection from "./Components/MainSection/MainSection";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
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
            { path: ":slug", element: <BlogDetails /> },
          ],
        },
        { path: "/about", element: <div>من نحن</div> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
