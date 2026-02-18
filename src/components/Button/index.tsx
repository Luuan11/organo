import { ReactNode } from "react"
import "./button.css"

interface ButtonProps {
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button type="submit">{children}</button>
}

export default Button
