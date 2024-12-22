import { Dispatch, SetStateAction } from "react";
import { ContactIcons } from "../ContactIcons";
import { Nav } from "../Nav/Nav";

type NavMobileProps = {
  setShow: Dispatch<SetStateAction<boolean>>
}

export function NavMobile({ setShow } : NavMobileProps) {
  return (
    <nav className=" bg-secondary p-5">
    
            <Nav className=" flex-col items-center" setShow={setShow} />

            <div className=" border-t border-neutral-100 flex justify-center pt-4">
                <ContactIcons />
            </div>
   
    </nav>
  )
}
