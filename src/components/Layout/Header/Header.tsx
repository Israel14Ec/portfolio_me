import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactIcons } from "../ContactIcons";
import { Nav } from "../Nav";
import { FaBars } from "react-icons/fa";
import { NavMobile } from "../NavMobile";

export function Header() {

    const [ show, setShow ] = useState(false)

    const changeShow = () => setShow(prev => !prev)

    // Oculta el menú si el ancho es mayor a 768px
    const handleResize = () => {
        if (window.innerWidth > 768) {
          setShow(false); 
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize); //Se elimina el evento
      }, []);

  return (
    <>
        <header className=" bg-primary p-2">
            <div className="p-2 md:w-[90%] mx-auto">
                <div className=" flex gap-5 items-center justify-center"> 
                    <div className="w-3/4">
                        <Link to="/">
                            <img src="/logo.png" alt="Logo de Israel Tuglema" className=" w-44 object-cover"/>
                        </Link>
                    </div>

                    <div className="w-full md:inline hidden">
                        <div className="flex justify-center items-center gap-2">             
                            <div className="flex-1">
                                <Nav/>
                            </div>
                            
                            <div className="">
                                <ContactIcons />
                            </div>
                        </div>
                    </div>

                    <div className="w-2/4 md:hidden flex justify-end">
                        <button className="cursor-pointer text-white" onClick={changeShow} >    
                            <FaBars size={20}/>
                        </button>
                    </div>

        
                </div> 
            </div>
        </header>
        
        { show && (
            <NavMobile setShow={setShow} />
        )}
    </>
  )
}
