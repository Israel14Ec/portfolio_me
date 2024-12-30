import { Link } from "react-router-dom"

type CardProjectProps = {
  img: string
  title: string
  description: string,
  to: string
}

export function CardProject({ img, title, description, to}: CardProjectProps) {
  return (
    <Link className=" bg-white rounded-lg p-4 shadow-md font-thin w-80 mx-auto" to={to}>
        <div className=" bg-card px-5 pt-5 mb-6">
            <img src={img} alt={`Proyecto ${title}`} className=" h-32 w-full"/>
        </div>
        <p className=" text-secondary text-xl">{ title}</p>
        <p className=" text-tertiary"> { description}</p>  

    
    </Link>
  )
}
