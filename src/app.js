import React, {lazy, Suspense, useEffect, useState, useContext} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import HotelMenu from "./components/HotelMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./utils/userContext";

let Privacy = lazy(()=> import("./components/Privacy"));


let Layout = () => {
    let [userName, setUserName] = useState();
    let {loggedInUser} = useContext(userContext);
    // console.log(loggedInUser);

    useEffect(()=> {
       let data = {
        name: "Gamma"
       }

       setUserName(data.name);
    //    console.log(data.name);
    }, [])

  return (
    <div>
        <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <Header />
      <Outlet />
      </userContext.Provider>
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
            },
            {
                path: "/privacy",
                element: <Suspense fallback={<h1>Loading..........</h1>}><Privacy /></Suspense>
            }

        ],
        errorElement: <ErrorPage />
    }
])


let root = ReactDOM.createRoot(document.getElementById("layout"));
root.render(<RouterProvider router={appRouter} />);
