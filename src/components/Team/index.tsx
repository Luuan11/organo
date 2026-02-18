import hexToRgba from "hex-to-rgba"
import EmployeeCard from "../Employee"
import { EmployeeWithId, Team as TeamType } from "../shared/interfaces"
import "./Team.css"

interface TeamProps {
  team: TeamType
  employees: EmployeeWithId[]
  onDeleteEmployee: (id: string) => void
  onColorChange: (color: string, id: string) => void
  onToggleFavorite: (id: string) => void
}

const Team: React.FC<TeamProps> = ({
  team,
  employees,
  onDeleteEmployee,
  onColorChange,
  onToggleFavorite,
}) => {
  if (employees.length === 0) {
    return null
  }

  const backgroundColor = hexToRgba(team.color, "0.6")

  return (
    <section className="team" style={{ backgroundColor }}>
      <input
        value={team.color}
        onChange={(event) => onColorChange(event.target.value, team.id)}
        type="color"
        className="color-picker"
      />
      <h3 style={{ borderColor: team.color }}>{team.name}</h3>
      <div className="employees">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            backgroundColor={team.color}
            onDelete={onDeleteEmployee}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  )
}

export default Team
