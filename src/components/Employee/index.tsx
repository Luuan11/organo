import { FaWindowClose } from "react-icons/fa"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { EmployeeWithId } from "../shared/interfaces"
import "./Employee.css"

interface EmployeeProps {
  employee: EmployeeWithId
  backgroundColor: string
  onDelete: (id: string) => void
  onToggleFavorite: (id: string) => void
}

const Employee: React.FC<EmployeeProps> = ({
  employee,
  backgroundColor,
  onDelete,
  onToggleFavorite,
}) => {
  const favoriteIconProps = {
    size: 25,
    onClick: () => onToggleFavorite(employee.id),
  }

  return (
    <div className="employee-card">
      <FaWindowClose
        size={25}
        className="delete-btn"
        onClick={() => onDelete(employee.id)}
      />
      <div className="header" style={{ backgroundColor }}>
        <img src={employee.imageUrl} alt={employee.name} />
      </div>
      <div className="footer">
        <h4>{employee.name}</h4>
        <h5>{employee.role}</h5>
        <div className="favorite">
          {employee.isFavorite ? (
            <AiFillHeart {...favoriteIconProps} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...favoriteIconProps} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Employee
