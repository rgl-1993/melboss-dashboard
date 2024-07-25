import "../globals.css";
import Link from "next/link";

type Task = {
  id: string,
  title: string;
  description: string;
  finishDate: string;
  pendingDays: number;
};

export default async function dashboardPage() {
  const tasks = await fetchTasks();
  return (
    <div>
      <Link href="task_creation">
        <button className="bg-orange-300 text-white font-bold py-2 px-4 rounded">
          Crear nueva tarea
        </button>
      </Link>
      <ul>
        {tasks.map((task: Task) => (
          <Link
            href={{
              pathname: "/task",
              query: {
                id: task.id,
              },
            }}
            key={task.id}
          >
            <li
              className="px-8 py-8 my-8 bg-white shadow-md mix-blend-color rounded-2xl"
              style={{
                boxShadow:
                  "-4px 4px 6px -1px rgba(255, 244, 151, 0.61), -4px 8px 16px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <p className="text-xl">{task.title}</p>
              <p className="text-gray-600">{task.id}</p>
              <p>{task.finishDate}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export async function fetchTasks() {
  const response = await fetch("http://localhost:3001/tasks", {
    cache: "no-store",
  });
  const tasks = await response.json();

  return tasks;
}

