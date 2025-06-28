import { ArrowRightIcon, Trash2Icon } from "lucide-react";
import { useDeleteTask, useFindAll, useUpdateTask } from "../hooks/useTask";
import { useNavigate } from "react-router-dom";

export function ListTask() {
  const { data: tasks, isLoading, isError } = useFindAll();
  const navigate = useNavigate();

  const useDelete = useDeleteTask();
  function onDelete(id: number) {
    useDelete.mutate(id);
  }

  const useUpdate = useUpdateTask();
  function onUpdate(id: number, complete: boolean) {
    useUpdate.mutate({ id, complete: !complete });
  }

  if (isLoading) {
    return (
      <div className="border-4 border-slate-500 border-t-white w-10 h-10 mt-3.5 rounded-full animate-spin"></div>
    );
  }

  return (
    <>
      {tasks?.length !== 0 ? (
        <ul className="bg-slate-300 flex flex-col gap-1.5 w-[400px] p-2 rounded">
          {tasks?.map((task) => (
            <li className="flex gap-1" key={task.id}>
              <button onClick={() => onUpdate(task.id, task.complete)} className={task.complete === true ? "bg-slate-400 p-1.5 cursor-pointer w-full rounded text-white font-bold text-left line-through" : "bg-slate-400 p-1.5 cursor-pointer w-full rounded text-white font-bold text-left"}>
                {task.title}
              </button>
              <button onClick={() => navigate(`/task/${task.id}`)} className="bg-slate-400 p-1.5 rounded cursor-pointer text-white font-bold">
                <ArrowRightIcon></ArrowRightIcon>
              </button>
              <button onClick={() => onDelete(task.id)} className="bg-slate-400 p-1.5 cursor-pointer rounded text-red-500 font-bold">
                <Trash2Icon></Trash2Icon>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="bg-slate-400 w-[400px] p-2 rounded text-white font-bold text-center">
          Nenhuma tarefa encontrada.
        </div>
      )}
    </>
  );
}
