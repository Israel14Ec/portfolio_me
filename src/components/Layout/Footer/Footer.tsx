import { Link } from "react-router-dom" 

export function Footer() {

    const year =  new Date()

  return (
    <footer className=" w-[90%] mx-auto p-5">
        <div className=" flex justify-between text-sm text-tertiary tracking-wide">
            <p>&copy; {year.getFullYear()} - Israel Tuglema</p>
            <nav className=" flex gap-5">
                <Link to={"/"}>
                    Sobre mi
                </Link> 
                <Link to={"/"}>
                   Proyectos
                </Link> 
                <Link to={"/"}>
                    Contacto
                </Link> 
            </nav>
        </div>
    </footer>
  )
}
