import { Outlet } from "react-router-dom"
import { NavBar } from "../pages/components/home/navbar"
import { Footer } from "../pages/components/home/footer"








export const MainLayout=()=>{
    return(
        <>
        
        <NavBar/>
<>
<Outlet/>
</>
  <Footer/>
        
        
        </>
    )
}