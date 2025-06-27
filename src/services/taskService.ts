import { api } from "../api/api";
import type { CreateTask } from "../types/createTask";

export async function findAll() {
  const response = await api.get("task/");
  return response.data;
}

export async function create(body: CreateTask) {
  const response = await api.post("task/", body);
  return response.data;
}
