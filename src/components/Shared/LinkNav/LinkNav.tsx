import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

type LinkNavProps = {
    to: string
    title: string
    className?:string
}

export function LinkNav( { to, title, className} : LinkNavProps) {

  const location = useLocation()
  const isActive = useMemo(() => location.pathname === to, [location])
  
  return (
    <Link to={to} className={`hover:text-tertiary text-lg md:text-base ${className ? className : ""} ${isActive ? 'text-tertiary': 'text-white' }`}>
        {title}
    </Link>
  )
}
