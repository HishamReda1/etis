"use server"

import { revalidatePath } from "next/cache"
import { allProjects, type Project } from "@/data"

// In a real application, these would interact with a database
// For this example, we'll use the in-memory array

// Create a new project
export async function createProject(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    const newProject: Project = {
      id: allProjects.length > 0 ? Math.max(...allProjects.map((p) => p.id)) + 1 : 1,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageUrl: formData.get("imageUrl") as string,
      category: formData.get("category") as string,
      contractor: formData.get("contractor") as string,
      application: formData.get("application") as string,
      link: formData.get("link") as string,
    }

    allProjects.push(newProject)
    revalidatePath("/")
    return { success: true, message: "Project created successfully" }
  } catch (error) {
    return { success: false, message: "Failed to create project" }
  }
}

// Update an existing project
export async function updateProject(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    const id = Number(formData.get("id"))
    const index = allProjects.findIndex((p) => p.id === id)

    if (index === -1) {
      return { success: false, message: "Project not found" }
    }

    const updatedProject: Project = {
      id,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageUrl: formData.get("imageUrl") as string,
      category: formData.get("category") as string,
      contractor: formData.get("contractor") as string,
      application: formData.get("application") as string,
      link: formData.get("link") as string,
    }

    allProjects[index] = updatedProject
    revalidatePath("/")
    return { success: true, message: "Project updated successfully" }
  } catch (error) {
    return { success: false, message: "Failed to update project" }
  }
}

// Delete a project
export async function deleteProject(id: number): Promise<{ success: boolean; message: string }> {
  try {
    const index = allProjects.findIndex((p) => p.id === id)

    if (index === -1) {
      return { success: false, message: "Project not found" }
    }

    allProjects.splice(index, 1)
    revalidatePath("/")
    return { success: true, message: "Project deleted successfully" }
  } catch (error) {
    return { success: false, message: "Failed to delete project" }
  }
}

// Get all projects
export async function getProjects(): Promise<Project[]> {
  return allProjects
}

// Get a single project by ID
export async function getProject(id: number): Promise<Project | null> {
  return allProjects.find((p) => p.id === id) || null
}

