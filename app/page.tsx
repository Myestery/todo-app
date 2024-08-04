'use client'

import { useEffect, useState } from 'react'

import AddTodoForm from './components/AddTodoForm'
import { Todo } from '@prisma/client'
import TodoList from './components/TodoList'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const res = await fetch('/api/todos')
    const data = await res.json()
    setTodos(data)
  }

  const addTodo = async (title: string) => {
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
    const todo = await res.json()
    setTodos([...todos, todo])
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Todo App</h1>
        <AddTodoForm onAdd={addTodo} />
        <TodoList todos={todos} />
      </main>
    </div>
  )
}