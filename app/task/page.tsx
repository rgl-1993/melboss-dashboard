//import "../globals.css";

type Task = {
  title: string;
  description: string;
  finishDate: string;
  pendingDays: number;
};

export default async function taskPage({
  searchParams,
}: {
  searchParams: {
    id: number;
  };
}) {
  const task = await fetchTaskById(searchParams.id);
  return (
    <div className="m-8">
      <div className="inline-block align-top">
        <h1>{task.title}</h1>
        <p className="text-gray-400">[Task reference: {task.id}]</p>
      </div>
      <p>{task.description}</p>
      <p>Fecha de finalización: {task.finishDate}</p>
      <p>Quedan {task.pendingDays} días</p>
    </div>
  );
}

export async function fetchTaskById(id: number) {
  const response = await fetch(`http://localhost:3001/tasks/${id}`, {
    cache: "no-store",
  });
  const task = await response.json();

  return task;
}
