import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeLayout from "./layout/HomeLayout"
import Home from "./pages/Home"

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<Home/>} index/>
            </Route>
        </Routes>
    
    </BrowserRouter> 
  )
}
