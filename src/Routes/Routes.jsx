import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Favorites from "../Pages/Favorites/Favorites";
import Contact from "../Pages/Contact/Contact";
import Phone from "../Pages/Phone/Phone";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";

const router = createBrowserRouter ([
        {
            path: '/',
            element: <Root></Root>,
            children:[
                {
                    path: "/",
                    element: <Home></Home>,
                    loader: () => fetch('/phones.json')
                },
                {
                    path: "/about",
                    element: <About></About>
                },
                {
                    path: "/favorites",
                    element: <Favorites></Favorites>
                },
                {
                    path: "/phones/:id",
                    element: <Phone></Phone>,
                    loader: () => fetch("/phones.json")
                },
                {
                    path: "/contact",
                    element: <Contact></Contact>
                },
                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/registation",
                    element: <Registation></Registation>
                },
            ]
        } 
])

export default router;