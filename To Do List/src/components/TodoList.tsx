import React from 'react';
import { format } from 'date-fns';
import { Trash2, Bell, Calendar } from 'lucide-react';
import { useTodoStore } from '../store/todoStore';

export function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useTodoStore();

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <div className="flex-1">
            <p className={`text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.title}
            </p>
            <div className="flex gap-4 mt-2 text-sm text-gray-500">
              {todo.dueDate && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{format(todo.dueDate, 'PPp')}</span>
                </div>
              )}
              {todo.reminder && (
                <div className="flex items-center gap-1">
                  <Bell className="w-4 h-4" />
                  <span>{format(todo.reminder, 'PPp')}</span>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="p-2 text-gray-500 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
      {todos.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No todos yet. Add one above!
        </div>
      )}
    </div>
  );
}