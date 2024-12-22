import { FaGraduationCap } from "react-icons/fa"
import { IconText } from "../../Shared"

export function Training() {
  return (
    <section className=" mt-5">
        <div>
            <IconText 
                icon={<FaGraduationCap/>}
                text="Escuela Superior Politécnica de Chimborazo"
            >
                <p className=" text-tertiary">Ingeniero de software</p>
            </IconText>
        </div>
    </section>
  )
}
