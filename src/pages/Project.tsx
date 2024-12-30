import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CardProjectT } from "../types"
import { projects } from "../data/db"
import { MainBanner } from "../components/Project"

export default function Project() {

  const { id } = useParams()
  const [project, setProject] = useState<CardProjectT>()

  useEffect(() => {
    if(id) {
      const search = projects.filter(project => project.id === +id) 
      setProject(search[0])      
    }
  }, [])

  if(!project) return null

  return (
    <>
        <main className=" bg-white p-5 shadow-md">
            <div className=" md:w-[70%] mx-auto px-5 py-16">
                <MainBanner 
                  title={project.title} 
                  description={project.description} 
                  img={project.img} 
                  technologies={project.technologies} 
                  gitHubLinks={project.gitHubLink}
                  link={project.link}
                  linkDownload={project.linkDownload}
                />
            </div>
        </main>
    </>
  )
}
