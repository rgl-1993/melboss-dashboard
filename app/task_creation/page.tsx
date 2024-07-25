"use client";

import "../globals.css";
import { FormEvent } from "react";

export default function Page() {
  async function myFunction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    form.reset();
    //Faltó hacer comprobaciones sobre si se añadió bien
    //Tampoco se han hecho comprobaciones de los datos introducidos en el formulario
    //Y tampoco el uso de manejo de excepciones
  }

  return (
    <form
      onSubmit={myFunction}
      className="mx-auto my-auto p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center space-y-4"
    >
      <div>
        <label>
          Título:{" "}
          <input
            type="text"
            name="title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-200 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label>
          Descripción:{" "}
          <input
            type="text"
            name="description"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-200 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label>
          Fecha de finalización:{" "}
          <input
            type="text"
            name="finishDate"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-200 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label>
          Días para terminar la tarea:
          <input
            type="number"
            name="pendingDays"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-200 sm:text-sm"
          />
        </label>
      </div>
      <button type="submit">Crear tarea</button>
    </form>
  );
}
