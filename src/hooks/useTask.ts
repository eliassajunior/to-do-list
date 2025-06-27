import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { create, findAll } from "../services/taskService";

export function useFindAll() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: findAll,
  });
}

export function useCreate() {
  const useQuery = useQueryClient();

  return useMutation({
    mutationFn: create,
    onSuccess: () => {
      useQuery.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
