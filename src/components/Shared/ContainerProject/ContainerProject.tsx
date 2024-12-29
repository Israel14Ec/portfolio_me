import { ReactNode } from "react"

type ContainerProjectProps = {
    children: ReactNode,
    title: string
}

export function ContainerProject({children, title} : ContainerProjectProps) {
  return (
    <section className="relative w-full overflow-hidden rounded-lg bg-neutral-50 pt-16">
       <h2 className=" font-semibolold text-secondary mb-10 text-xl text-center">{title} </h2>
        { children }
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-16 w-32 bg-neutral-100 rounded-t-full shadow-inner"/>
    </section>
  )
}
