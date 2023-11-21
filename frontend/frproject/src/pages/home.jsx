   

import 'tailwindcss/tailwind.css';
import { Section } from './components/home/section';
import {Main} from "./components/home/main"
import { Pricing } from './components/home/pricing';
import { Footer } from './components/home/footer';
import { NavBar } from './components/home/navbar';
   export const Home=()=>{
    return(
 <>
 <Section/>
 <Main/>
 <Pricing/>
 </>
    )
   }