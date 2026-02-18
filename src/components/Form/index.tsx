import { useState, useCallback, FormEvent } from "react"
import { ZodError } from "zod"
import Button from "../Button"
import TextField from "../TextField"
import Dropdown from "../Dropdown"
import { Employee } from "../shared/interfaces"
import { employeeSchema, teamSchema } from "../../lib/validation"
import "./Form.css"

type ActiveTab = "employee" | "team"

interface FormProps {
  onRegisterEmployee: (employee: Employee) => void
  teamNames: string[]
  onCreateTeam: (team: { name: string; color: string }) => void
}

interface FormErrors {
  [key: string]: string
}

const Form: React.FC<FormProps> = ({ onRegisterEmployee, teamNames, onCreateTeam }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("employee")
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [selectedTeam, setSelectedTeam] = useState("")
  const [employeeErrors, setEmployeeErrors] = useState<FormErrors>({})

  const [teamName, setTeamName] = useState("")
  const [teamColor, setTeamColor] = useState("#6278F7")
  const [teamErrors, setTeamErrors] = useState<FormErrors>({})

  const resetEmployeeForm = useCallback(() => {
    setName("")
    setRole("")
    setImageUrl("")
    setSelectedTeam("")
    setEmployeeErrors({})
  }, [])

  const resetTeamForm = useCallback(() => {
    setTeamName("")
    setTeamColor("#6278F7")
    setTeamErrors({})
  }, [])

  const handleEmployeeSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setEmployeeErrors({})

      try {
        const validData = employeeSchema.parse({
          name,
          role,
          imageUrl,
          team: selectedTeam,
        })
        onRegisterEmployee(validData)
        resetEmployeeForm()
      } catch (error) {
        if (error instanceof ZodError) {
          const errors: FormErrors = {}
          error.errors.forEach((err) => {
            if (err.path[0]) {
              errors[err.path[0] as string] = err.message
            }
          })
          setEmployeeErrors(errors)
        }
      }
    },
    [name, role, imageUrl, selectedTeam, onRegisterEmployee, resetEmployeeForm]
  )

  const handleTeamSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setTeamErrors({})

      try {
        const validData = teamSchema.parse({ name: teamName, color: teamColor })
        onCreateTeam(validData)
        resetTeamForm()
      } catch (error) {
        if (error instanceof ZodError) {
          const errors: FormErrors = {}
          error.errors.forEach((err) => {
            if (err.path[0]) {
              errors[err.path[0] as string] = err.message
            }
          })
          setTeamErrors(errors)
        }
      }
    },
    [teamName, teamColor, onCreateTeam, resetTeamForm]
  )

  return (
    <section className="forms">
      <nav className="form-tabs">
        <button
          type="button"
          className={`tab ${activeTab === "employee" ? "active" : ""}`}
          onClick={() => setActiveTab("employee")}
        >
          New Employee
        </button>
        <button
          type="button"
          className={`tab ${activeTab === "team" ? "active" : ""}`}
          onClick={() => setActiveTab("team")}
        >
          New Team
        </button>
      </nav>

      {activeTab === "employee" && (
        <form onSubmit={handleEmployeeSubmit} noValidate>
          <TextField
            label="Name"
            placeholder="Enter employee name"
            value={name}
            onType={setName}
            error={employeeErrors.name}
          />

          <TextField
            label="Role"
            placeholder="Enter employee role"
            value={role}
            onType={setRole}
            error={employeeErrors.role}
          />

          <TextField
            label="Image URL"
            placeholder="Enter the image URL"
            value={imageUrl}
            onType={setImageUrl}
            error={employeeErrors.imageUrl}
          />

          <Dropdown
            label="Team"
            items={teamNames}
            value={selectedTeam}
            onChange={setSelectedTeam}
            error={employeeErrors.team}
          />

          <Button>Create Employee</Button>
        </form>
      )}

      {activeTab === "team" && (
        <form onSubmit={handleTeamSubmit} noValidate>
          <TextField
            label="Name"
            placeholder="Enter the team name"
            value={teamName}
            onType={setTeamName}
            error={teamErrors.name}
          />

          <TextField
            label="Color"
            type="color"
            placeholder="Choose the team color"
            value={teamColor}
            onType={setTeamColor}
            error={teamErrors.color}
          />

          <Button>Create Team</Button>
        </form>
      )}
    </section>
  )
}

export default Form
