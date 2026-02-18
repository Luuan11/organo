import { useState, useCallback, useMemo } from "react"
import ErrorBoundary from "./components/ErrorBoundary"
import Form from "./components/Form"
import Team from "./components/Team"
import Footer from "./components/Footer"
import { Employee, EmployeeWithId, Team as TeamType } from "./components/shared/interfaces"

const INITIAL_TEAMS: Omit<TeamType, "id">[] = [
  { name: "Programming", color: "#57C278" },
  { name: "Front-End", color: "#82CFFA" },
  { name: "Data Science", color: "#A6D157" },
  { name: "DevOps", color: "#E06B69" },
  { name: "UX & Design", color: "#DB6EBF" },
  { name: "Mobile", color: "#FFBA05" },
  { name: "Innovation & Management", color: "#FF8A29" },
]

const createInitialEmployees = (teams: TeamType[]): EmployeeWithId[] => {
  const employeeData = [
    { name: "JULIANA AMOASEI", role: "Software Developer and Instructor", imageUrl: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg" },
    { name: "DANIEL ARTINE", role: "Software Engineer at Stone Age", imageUrl: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg" },
    { name: "GUILHERME LIMA", role: "Python and JavaScript Developer", imageUrl: "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg" },
    { name: "PAULO SILVEIRA", role: "Hipster and CEO", imageUrl: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg" },
  ]

  return teams.slice(0, 6).flatMap((team) =>
    employeeData.map((employee) => ({
      ...employee,
      id: crypto.randomUUID(),
      isFavorite: false,
      team: team.name,
    }))
  )
}

const App: React.FC = () => {
  const [teams, setTeams] = useState<TeamType[]>(() =>
    INITIAL_TEAMS.map((team) => ({ ...team, id: crypto.randomUUID() }))
  )

  const [employees, setEmployees] = useState<EmployeeWithId[]>(() =>
    createInitialEmployees(teams)
  )

  const teamNames = useMemo(() => teams.map((team) => team.name), [teams])

  const handleColorChange = useCallback((color: string, teamId: string) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId ? { ...team, color } : team
      )
    )
  }, [])

  const handleDeleteEmployee = useCallback((employeeId: string) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== employeeId)
    )
  }, [])

  const handleCreateTeam = useCallback((newTeam: Omit<TeamType, "id">) => {
    setTeams((prevTeams) => [...prevTeams, { ...newTeam, id: crypto.randomUUID() }])
  }, [])

  const handleToggleFavorite = useCallback((employeeId: string) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === employeeId
          ? { ...employee, isFavorite: !employee.isFavorite }
          : employee
      )
    )
  }, [])

  const handleRegisterEmployee = useCallback((employee: Employee) => {
    const teamName = employee.team ?? teams[0]?.name ?? ""
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      {
        ...employee,
        id: crypto.randomUUID(),
        isFavorite: false,
        team: teamName,
      },
    ])
  }, [teams])

  const getEmployeesByTeam = useCallback(
    (teamName: string) =>
      employees.filter((employee) => employee.team === teamName),
    [employees]
  )

  return (
    <ErrorBoundary>
      <div className="App">
        <header className="app-header">
          <img src="/imagens/logo.png" alt="Organo logo" />
        </header>
        <Form
          onCreateTeam={handleCreateTeam}
          teamNames={teamNames}
          onRegisterEmployee={handleRegisterEmployee}
        />
        <section className="times">
          <h1>My Organization</h1>
          {teams.map((team) => (
            <Team
              key={team.id}
              team={team}
              employees={getEmployeesByTeam(team.name)}
              onColorChange={handleColorChange}
              onDeleteEmployee={handleDeleteEmployee}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </section>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
