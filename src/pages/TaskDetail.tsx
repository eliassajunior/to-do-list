import { useNavigate, useParams } from "react-router-dom";
import { useFindAll } from "../hooks/useTask";
import { ArrowLeftIcon } from "lucide-react";
import { useEffect } from "react";

export function TaskDetail() {
  const { data: tasks, isLoading } = useFindAll();
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks?.find((task) => task.id === Number(id));

  useEffect(() => {
    document.title = task?.title ? `${task.title}` : "Detalhes da Tarefa";
  }, [task?.title]);

  if (isLoading) {
    return (
      <div className="bg-slate-500 flex justify-center items-center w-full h-screen">
        <div className="border-4 border-slate-500 border-t-white w-10 h-10 mt-3.5 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-slate-500 flex justify-center items-baseline p-3.5 w-full h-screen">
        <div className="bg-slate-300 w-[400px] h-auto p-2 rounded">
          <button className="text-white cursor-pointer" onClick={() => navigate("/")}>
            <ArrowLeftIcon />
          </button>
          <h1 className="text-white text-xl font-bold text-center pb-2">
            {task?.title}
          </h1>
          {task?.description && (
            <p className="bg-slate-400 w-full p-1.5 text-white text-center">
              {task.description}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
