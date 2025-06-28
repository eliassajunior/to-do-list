import { api } from "../api/api";
import type { CreateTask } from "../types/createTask";
import type { Task } from "../types/task";

export async function findAll(): Promise<Task[]> {
  const response = await api.get("task/");
  return response.data;
}

export async function createTask(body: CreateTask): Promise<Task> {
  const response = await api.post("task/", body);
  return response.data;
}

export async function updateCompleteTask(id: number, complete: boolean): Promise<Task> {
  const response = await api.patch(`task/${id}`, { complete });
  return response.data;
}

export async function deleteTask(id: number): Promise<Task> {
  const response = await api.delete(`task/${id}`);
  return response.data;
}
