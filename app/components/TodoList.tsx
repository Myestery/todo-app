"use client";

import { Todo } from "@prisma/client";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <ul className='space-y-2'>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className='bg-white p-4 rounded-md shadow-md flex items-center justify-between text-gray-500'>
          <span>{todo.title}</span>
          <span className='text-sm text-gray-500'>
            {new Date(todo.createdAt).toLocaleDateString()}
          </span>
        </li>
      ))}
    </ul>
  );
}
