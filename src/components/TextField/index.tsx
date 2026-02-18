import { ChangeEvent } from "react"
import "./TextField.css"

interface TextFieldProps {
  onType: (value: string) => void
  placeholder: string
  label: string
  value: string
  mandatory?: boolean
  type?: string
  error?: string
}

const TextField: React.FC<TextFieldProps> = ({
  onType,
  placeholder,
  label,
  value,
  mandatory = false,
  type = "text",
  error,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onType(event.target.value)
  }

  return (
    <div className={`text-field ${error ? "has-error" : ""}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={`${placeholder}...`}
        required={mandatory}
        aria-invalid={!!error}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  )
}

export default TextField
