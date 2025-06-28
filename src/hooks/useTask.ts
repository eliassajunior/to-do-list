import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateCompleteTask, createTask, deleteTask, findAll } from "../services/taskService";
import type { CreateTask } from "../types/createTask";

export function useFindAll() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => findAll(),
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: CreateTask) => createTask(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      console.log("Error adding new task: ", error);
    },
  });
}

export function useUpdateCompleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, complete }: { id: number; complete: boolean }) => updateCompleteTask(id, complete),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      console.log("Error changing task to \"complete\": ", error);
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      console.log("Error deleting task: ", error);
    },
  });
}
