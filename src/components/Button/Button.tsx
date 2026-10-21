import type { ReactNode } from "react"
import "./Button.css"

const Button = ({children}:{children:ReactNode}) => {
  return (
    <button className="main-button">{children}</button>
  )
}

export default Button