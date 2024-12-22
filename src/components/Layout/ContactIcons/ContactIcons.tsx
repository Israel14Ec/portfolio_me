import {  FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export function ContactIcons() {

    const phoneNumber = "5930997700125"
    const message = "Saludos, estoy interesado en comunicarme contigo"
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    
  return (
    <div className="flex gap-4 text-white text-4xl">
        <a 
            href="https://www.linkedin.com/in/bryan-tuglema-4ab691267/"
            target="blank"
        >
            <FaLinkedin/>
        </a>
        
        <a href={whatsappLink}
            target="_blank"
        >
            <FaWhatsapp/>
        </a>

        <a href="https://github.com/Israel14Ec"
            target="blank"
        >
            <FaGithub />
        </a>
    </div>
  )
}
