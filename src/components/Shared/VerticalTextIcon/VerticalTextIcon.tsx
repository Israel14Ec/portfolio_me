import { ReactNode } from "react";

type VerticalTextIconProps = {
    icon: ReactNode
    text: string
    className?: string
}

export function VerticalTextIcon({ icon, text, className} : VerticalTextIconProps) {
  return (
    <div className={`flex flex-col justify-center items-center ${className ? className : ""}`}>
        <p className=" text-lg"> {icon} </p>
        <p className=" text-sm font-semibold">{text} </p>
    </div>
  )
}
