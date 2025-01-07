import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import HotelMenu from "./components/HotelMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

let Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/hotels/:resId",
                element: <HotelMenu />
            }

        ],
        errorElement: <ErrorPage />
    }
])

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={<Layout />}
//           errorElement={<ErrorPage />} // Attach ErrorPage to Layout
//         />
//         <Route
//           path="/about"
//           element={<AboutUs />}
//           errorElement={<ErrorPage />} // Attach ErrorPage to AboutUs
//         />
//         <Route
//           path="/contact"
//           element={<Contact />}
//           errorElement={<ErrorPage />} // Attach ErrorPage to Contact
//         />
//         <Route
//           path="*"
//           element={<ErrorPage />} // Handle unmatched routes
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

let root = ReactDOM.createRoot(document.getElementById("layout"));
root.render(<RouterProvider router={appRouter} />);
