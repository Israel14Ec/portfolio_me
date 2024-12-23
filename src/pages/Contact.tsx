import { ContactIcons } from "../components/Layout";


export default function Contact() {
  return (
    <main className=" bg-white p-5 shadow-md">
        <div className=" w-[70%] py-16 mx-auto">
       
            <div className=" flex gap-16 items-center justify-center">
                <div className=" w-1/2">
                    <h2 className=" text-primary text-4xl font-extrabold">Contacto</h2>
                    <p className=" font-thin text-secondary text-lg mt-10 mb-5">
                    Puedes conectarte conmigo a través de las siguientes plataformas sociales. ¡Estoy disponible para cualquier consulta o colaboración!
                    </p>
                    <ContactIcons className=" text-secondary"/>
                </div>
                <div className=" w-1/2">
                    <div className=" flex justify-center">
                        <img src="/logoBlack.png" alt="logo IstDev" className=" w-60 h-60 shadow-lg rounded-full " />
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
