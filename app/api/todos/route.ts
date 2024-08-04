import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const todos = await prisma.todo.findMany()
  return NextResponse.json(todos)
}

export async function POST(request: Request) {
  const json = await request.json()
  const todo = await prisma.todo.create({
    data: { title: json.title },
  })
  return NextResponse.json(todo, { status: 201 })
}