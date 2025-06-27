import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { create, findAll } from "../services/taskService";

export function useFindAll() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: findAll,
  });
}

export function useCreate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
