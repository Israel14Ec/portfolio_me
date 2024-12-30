import { projects } from "../../../data/db";
import { CardProject, ContainerProject } from "../../Shared";


export function ListProjects() {
  return (
    <ContainerProject title="LISTA DE PROYECTOS">
      <div className="w-[70%] mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center items-start">
        { projects.map((project) => (
          <CardProject
            key={project.id}
            img={ project.img}
            title={project.title}
            description={project.description}
            to={`/project/${project.id}`}
          />
        ))}
      </div>
    </ContainerProject>
  )
}
