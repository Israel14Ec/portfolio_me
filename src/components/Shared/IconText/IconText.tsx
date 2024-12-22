import { ReactNode } from "react"

type IconTextProps = {
  icon: ReactNode
  text: string
  children?: ReactNode
}

export function IconText({icon, text, children} : IconTextProps) {
  return (
    <div className="flex items-center gap-3 text-secondary">
      <p className=" text-lg"> {icon} </p>
      <div>
        <h3> { text } </h3>
        {children}
      </div>
    </div>
  )
}
