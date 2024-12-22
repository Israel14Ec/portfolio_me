import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import HomeLayout from "./layout/HomeLayout"
import Home from "./pages/Home"
const AboutMe = lazy(() => import("./pages/AboutMe"))

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<Home/>} index/>
                <Route path="/about_me" element={<Suspense fallback="Cargando"> {<AboutMe/> }</Suspense>} />
            </Route>
        </Routes>
    
    </BrowserRouter> 
  )
}
