import { z } from "zod"

export const employeeSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  role: z
    .string()
    .min(2, "Role must be at least 2 characters")
    .max(100, "Role must be at most 100 characters"),
  imageUrl: z
    .string()
    .url("Please enter a valid URL")
    .or(z.literal("")),
  team: z.string().min(1, "Please select a team"),
})

export const teamSchema = z.object({
  name: z
    .string()
    .min(2, "Team name must be at least 2 characters")
    .max(50, "Team name must be at most 50 characters"),
  color: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/, "Please select a valid color"),
})

export type EmployeeFormData = z.infer<typeof employeeSchema>
export type TeamFormData = z.infer<typeof teamSchema>
