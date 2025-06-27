import type { CreateTask } from "../types/createTask";
import { useCreateTask } from "../hooks/useTask";
import { useForm } from "react-hook-form";

export function AddTask() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateTask>();
  const useCreate = useCreateTask();

  function onSubmit(body: CreateTask) {
    useCreate.mutate(body);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-400 flex flex-col gap-1.5 w-[400px] p-2 rounded">
      <div className="flex flex-col justify-center gap-0.5">
        <input
          type="text"
          placeholder="Título"
          className="bg-white p-1.5 outline-none rounded text-slate-600 placeholder:text-slate-600 placeholder:font-bold focus:border-2 focus:border-slate-600"
          {...register("title", { required: true })}
        />
        {errors.title?.type === "required" && (
          <span className="inline-block text-red-500 font-bold text-center">
            O título é obrigatório!
          </span>
        )}
      </div>

      <div className="flex flex-col justify-center gap-0.5">
        <input
          type="text"
          placeholder="Descrição"
          className="bg-white p-1.5 outline-none rounded text-slate-600 placeholder:text-slate-600 placeholder:font-bold focus:border-2 focus:border-slate-600"
          {...register("description")}
        />
      </div>

      <button type="submit" className="bg-slate-300 p-1.5 cursor-pointer rounded text-white font-bold">
        Adicionar
      </button>
    </form>
  );
}
