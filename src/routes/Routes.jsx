import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";


const router =createBrowserRouter([

    {
        path: '/',
        element :<Root></Root>,
        children :[
            {
                path:'/',
                element:<Home></Home>,
                loader : ()=>fetch('/news.json')
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <PrivateRoute><Career></Career></PrivateRoute>
            },
            {
                path: '/news/:_id',
                element:<PrivateRoute><News></News></PrivateRoute>
            },
            {
                path : '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    }

])

export default router;