import { Link } from "react-router-dom"

type CardProjectProps = {
  img: string
  title: string
  description: string,
  technologies?: string []
  to: string
}

export function CardProject({ img, title, description, technologies, to}: CardProjectProps) {
  return (
    <Link className=" bg-white rounded-lg p-4 shadow-md font-thin w-80" to={to}>
        <div className=" bg-card px-5 pt-5 mb-6">
            <img src={img} alt={`Proyecto ${title}`} className=" h-32 w-full"/>
        </div>
        <p className=" text-secondary text-xl">{ title}</p>
        <p className=" text-tertiary"> { description}</p>  

        { technologies && (
          <div className=" mt-5" >
            <h3 className=" text-tertiary font-semibold">Tecnologías utilizadas: </h3>
            <ul className=" list-disc ml-5 text-sm text-tertiary grid md:grid-cols-2 md:gap-x-5">
              { technologies.map((tech, index) => (
                <li key={index}>{ tech} </li>
              ))}
            </ul>
          </div>
        )}
    </Link>
  )
}
