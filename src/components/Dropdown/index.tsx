import { ChangeEvent } from "react"
import "./Dropdown.css"

interface DropdownProps {
  onChange: (value: string) => void
  label: string
  required?: boolean
  value: string
  items: string[]
  error?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  onChange,
  label,
  required = false,
  value,
  items,
  error,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className={`dropdown ${error ? "has-error" : ""}`}>
      <label>{label}</label>
      <select
        onChange={handleChange}
        required={required}
        value={value}
        aria-invalid={!!error}
      >
        <option value="">Select</option>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {error && <span className="error-message">{error}</span>}
    </div>
  )
}

export default Dropdown
