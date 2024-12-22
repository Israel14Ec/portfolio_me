import { Link } from "react-router-dom";

type LinkNavProps = {
    to: string
    title: string
    className?:string
}

export function LinkNav( { to, title, className} : LinkNavProps) {
  return (
    <Link to={to} className={`text-white hover:text-tertiary text-lg md:text-base ${className ? className : ""}`}>
        {title}
    </Link>
  )
}
