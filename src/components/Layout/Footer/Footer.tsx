import { Link } from "react-router-dom" 

export function Footer() {

    const year =  new Date()

  return (
    <footer className=" w-[90%] mx-auto p-5">
        <div className=" flex justify-between text-sm text-tertiary tracking-wide">
            <p>&copy; {year.getFullYear()}-IstDev</p>
            <nav className=" flex flex-col md:flex-row gap-5">
                <Link to={"/about_me"}>
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
