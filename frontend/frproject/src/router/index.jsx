import {createBrowserRouter} from "react-router-dom"
import {Home} from "../pages/home"
import { Login } from "../pages/login"
import { Register } from "../pages/register"
import { MainLayout } from "../layouts/mainLayouts"

export const routerI=createBrowserRouter([


   {
    element:<MainLayout/>,
    children:[
       
    {
        path:"/",
        element:<Home/>
    },
    
    {
        path:"/login",
        element:<Login/>
    }
,
{
    path:"/register",
    element:<Register/>
}   
    ]

   }









])