import { ListTask } from "./components/ListTask";
import { AddTask } from "./components/AddTask";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Lista de Tarefas";
  });

  return (
    <>
      <div className="bg-slate-500 flex flex-col items-center gap-1.5 w-full h-screen p-2.5">
        <h1 className="text-white text-3xl font-bold">Lista de Tarefas</h1>
        <AddTask />
        <ListTask />
      </div>
    </>
  );
}
