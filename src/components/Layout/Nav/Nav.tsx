import { Dispatch, SetStateAction } from "react";
import { LinkNav } from "../../Shared";

type NavProps = {
  className?: string
  setShow?: Dispatch<SetStateAction<boolean>>
}

export function Nav( { className, setShow } : NavProps) {
  return (
    <nav className={`flex gap-7 ${className ? className : ""}`}
      onClick={() => {
        if (setShow) {
          setShow(false); 
        }
      }}
    >
        <LinkNav
            to="/about_me"
            title="Sobre mí"
            className="border-b w-full text-center md:border-none md:w-auto md:text-center"
        />
        <LinkNav
            to="/"
            title="Proyectos"
            className="border-b w-full text-center md:border-none md:w-auto md:text-center"
        />
        <LinkNav
            to="/"
            title="Contacto"
        />
    </nav>
  )
}
