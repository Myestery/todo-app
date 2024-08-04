'use client'

import { useState } from 'react'

interface AddTodoFormProps {
  onAdd: (title: string) => void
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <button
        type="submit"
        className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Add Todo
      </button>
    </form>
  )
}