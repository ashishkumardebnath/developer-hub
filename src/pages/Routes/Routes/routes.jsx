import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Home/Home/Home/Home";
import About from "../../Home/Home/About/About";
import Services from "../../Home/Home/Services/Services";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            }
        ]
    }
])