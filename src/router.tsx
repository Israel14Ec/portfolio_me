import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import HomeLayout from "./layout/HomeLayout"
import Home from "./pages/Home"
const AboutMe = lazy(() => import("./pages/AboutMe"))
const Contact = lazy( () => import("./pages/Contact"))
const Portfolio = lazy(() => import("./pages/Portfolio"))

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<Home/>} index/>
                <Route path="/about_me" element={<Suspense fallback="Cargando"> {<AboutMe/> }</Suspense>} />
                <Route path="/contact" element={<Suspense fallback="Cargando"> {<Contact/> }</Suspense>} />
                <Route path="/portfolio" element={<Suspense fallback="Cargando"> {<Portfolio /> } </Suspense>} />
            </Route>
        </Routes>
    
    </BrowserRouter> 
  )
}
