import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import Home from "../../Pages/Home/Home/Home";
import CategoryDetail from "../../Pages/Home/ProductCategories/CategoryDetail";
import CategoryDetails from "../../Pages/Home/ProductCategories/CategoryDetails";
import Login from "../../Pages/Login/Login";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import SignUp from "../../Pages/SignUp/SignUp";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path:'/categoryDetails/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({params}) => fetch(`http://localhost:4000/services/${params.id}`)
            }
        ]
    },
    {
        path:'/dashboard',
        element: <DashBoard></DashBoard>
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])


