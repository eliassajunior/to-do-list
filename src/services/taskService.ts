import { api } from "../api/api";
import type { CreateTask } from "../types/createTask";
import type { Task } from "../types/task";

export async function findAll(): Promise<Task[]> {
  const response = await api.get("task/");
  return response.data;
}

export async function create(body: CreateTask): Promise<Task> {
  const response = await api.post("task/", body);
  return response.data;
}
