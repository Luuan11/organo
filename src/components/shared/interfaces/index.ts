export interface Employee {
  name: string
  role: string
  imageUrl: string
  team?: string
}

export interface EmployeeWithId extends Employee {
  id: string
  isFavorite: boolean
  team: string
}

export interface Team {
  id: string
  name: string
  color: string
}